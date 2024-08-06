import React, { createContext, useState } from 'react';

// Créez le contexte du panier
export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Créer un tableau vide pour la liste du panier
    const [CartList, setListCart] = useState([]);

    // Ajouter un produit au panier
    const addToListCart = (product) => {
        setListCart([...CartList, product]);
        console.log('Produit ajouté au panier:', CartList);
    };

    return (
        <CartContext.Provider value={{ CartList, addToListCart }}>
            {children}
        </CartContext.Provider>
    )
}
