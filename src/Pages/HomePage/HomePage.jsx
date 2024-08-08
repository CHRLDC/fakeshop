/**
 * Page d'accueil
 * Affiche la liste de tous les produits
 * Filtre les produits en fonction de la catégorie
 * Filtre les produits en fonction du terme de recherche
 * Gère l'affichage de la barre de recherche
 */

import React, { useContext, useState, useEffect } from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import { ProductContext } from '../../Context/ProductContext';
import Button from '../../Components/Buttons/Button';
import './HomePage.css';
import TabBar from '../../Components/TabBar/TabBar';
import SearchBar from '../../Components/SearchBar/SearchBar';

export default function HomePage() {

    // Définir les produits par défaut
    const { products } = useContext(ProductContext);
    // Définir l'état de la barre de recherche par défaut
    const [showSearchBar, setShowSearchBar] = useState(false);
    // Définir la liste des produits filtrés (la liste de tous les produits) par défaut
    const [filteredProducts, setFilteredProducts] = useState(products);
    // Définir la catégorie par défaut
    const [selectedCategory, setSelectedCategory] = useState('All');
    // Définir filtre vide
    const [emptyFiltre, setEmptyFiltre] = useState(true);

    // Gère l'affichage de la barre de recherche
    const toggleSearchBar = () => {
        // Inverser l'état de la barre de recherche
        setShowSearchBar(!showSearchBar);
    };

    // Met à jour la liste des produits, filtrés
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Filtre les produits en fonction du terme de recherche
    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            // Si le terme de recherche est vide, afficher tous les produits
            setFilteredProducts(products);
        } else {
            // Rechercher dans le titre si le terme existe
            const filtered = products.filter(product =>
                // Convertir le terme de recherche en minuscules et rechercher dans le titre
                product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    // Filtre les produits par catégorie
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            // Afficher tous les produits si la catégorie est 'All'
            setFilteredProducts(products);
        } else {
            // Filtrer en fonction de la catégorie choisie
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    // Vérifier si le filtre est vide
    useEffect(() => {
        // Si le filtre est vide, afficher tous les produits
        setEmptyFiltre(filteredProducts.length === 0);
    }, [filteredProducts]);

    return (
        <div className="app-container">
            {/* Barre supérieure avec le titre de la boutique et l'icône de recherche */}
            <div className="top-bar flex justify-between">
                <p>My Shop</p>
                <span className="picto-loup" id="active-searchBar" onClick={toggleSearchBar}></span>
            </div>
            {/* Section d'accueil avec le titre et le bouton CTA */}
            <div className="home-acceuil">
                <div>
                    <p className='title'>Fall 2024 collection</p>
                    <h1>Discover the new ready-to-wear collections for men and women.</h1>
                    <Button type="cta">see what's new</Button>
                </div>
            </div>
            {/* Boutons de catégories pour filtrer les produits */}
            <div className="caroussel-button gap16">
                <Button type="category" isYellow onClick={() => filterByCategory('All')}>All</Button>
                <Button type="category" onClick={() => filterByCategory("women's clothing")}>Women</Button>
                <Button type="category" onClick={() => filterByCategory("men's clothing")}>Men</Button>
                <Button type="category" onClick={() => filterByCategory('jewelery')}>Jewellery</Button>
                <Button type="category" onClick={() => filterByCategory('electronics')}>Electronics</Button>
            </div>
            {/* Barre de recherche affichée si showSearchBar = true */}
            <div className="flex justify-center relative">
                {showSearchBar && <SearchBar onClose={toggleSearchBar} onSearch={handleSearch} />}
            </div>
            {/* Liste des produits filtrés, All par défaut */}
            <div>
                {emptyFiltre ? (
                    <p className="flex justify-center mT20">No products matching your criteria</p>
                ) : (
                    <ProductList products={filteredProducts} />
                )}
            </div>
            {/* Barre d'onglets en bas de la page */}
            <div className="container-tab-bar">
                <TabBar />
            </div>
        </div>
    );
}
