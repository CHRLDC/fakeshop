import React, { createContext, useState } from 'react';

// Créez le contexte du panier
export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Créer un tableau vide pour la liste du panier
    const [cartList, setListCart] = useState([]);

    // Ajouter un produit au panier
    const addToListCart = (product) => {
        setListCart([...cartList, product]);
        console.log('Produit ajouté au panier');
    };

    // Supprimer un produit du panier
    const removeFromListCart = (product) => {
        setListCart(cartList.filter((item) => item.id !== product.id));
        console.log('Produit supprimé du panier');
    };
    return (
        <CartContext.Provider value={{ cartList, addToListCart, removeFromListCart }}>
            {children}
        </CartContext.Provider>
    )
}
