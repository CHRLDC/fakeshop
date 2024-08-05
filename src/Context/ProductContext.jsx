import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        // Fonction pour récupérer les produits de l'API
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=5');
                const data = await response.json();
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error('Erreur lors du chargement des produits:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
