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

    // Gère l'affichage de la barre de recherche
    const toggleSearchBar = () => {
        // inverser l'état de la barre de recherche
        setShowSearchBar(!showSearchBar);
    };

    // Met à jour les produits filtrés
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Filtre les produits en fonction du terme de recherche
    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            // Si le terme de recherche est vide, afficher tous les produits
            setFilteredProducts(products);
        } else {
            // Rechercher dans le titre si le term existe
            const filtered = products.filter(product =>
                product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    // Filtre les produits par catégorie
    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            // Afficher tous les produits sur All
            setFilteredProducts(products);
        } else {
            // Filtrer en fonction de la categorie choisie
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

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
                <Button type="category" onClick={() => filterByCategory('All')}>All</Button>
                <Button type="category" onClick={() => filterByCategory("women's clothing")}>Women</Button>
                <Button type="category" onClick={() => filterByCategory("men's clothing")}>Men</Button>
                <Button type="category" onClick={() => filterByCategory('jewelery')}>Jewellery</Button>
                <Button type="category" onClick={() => filterByCategory('electronics')}>Electronics</Button>
            </div>
            {/* Barre de recherche affichée si showSearchBar = true */}
            <div className="flex justify-center">
                {showSearchBar && <SearchBar onClose={toggleSearchBar} onSearch={handleSearch} />}
            </div>
            {/* Liste des produits filtrés, All par défaut */}
            <ProductList products={filteredProducts} />
            {/* Barre d'onglets en bas de la page */}
            <div className="container-tab-bar">
                <TabBar />
            </div>
        </div>
    );
}
