/**
 * Contexte du panier
 * Rôle: Partager l'état du panier et les fonctions de gestion du panier entre les différents composants enfants
 *       Utilise le local storage pour la mémoire du panier
 *       Gère la notification
 * Rend: CartContext (cartList)
 * Function disponible aux enfants: addToListCart, removeFromListCart, updateQuantity
 */

import React, { createContext, useState, useEffect } from 'react';
import Notification from '../Components/Notifications/Notifications';

// Créez et exporter le contexte du panier
export const CartContext = createContext();

// Fonction pour gérer le contexte du panier
export default function CartProvider({ children }) {
    // Charger l'état initial du panier depuis localStorage (dans le navigateur)
    const [cartList, setListCart] = useState(() => {
        const savedCart = localStorage.getItem('cartList');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Gérer l'état de la notification
    const [notification, setNotification] = useState({ show: false, message: '' });

    // Sauvegarder le panier dans localStorage à chaque mise à jour
    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }, [cartList]);

    // Fermer la notification
    const closeNotification = () => {
        setNotification({ show: false, message: '' });
    };

    // Ajouter un produit au panier
    const addToListCart = (product) => {
        setListCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // Si le produit existe dans le panier, augmenter sa quantité (ajouter la quantité d'un produit existant)
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Si le produit n'existe pas dans le panier, ajouter le produit complet avec une quantité de 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setNotification({ show: true, message: 'Produit ajouté au panier' });
    };

    // Supprimer un produit du panier
    const removeFromListCart = (product) => {
        setListCart(prevCart => prevCart.filter(item => item.id !== product.id));
        setNotification({ show: true, message: 'Produit supprimé du panier' });
    };

    // Mettre à jour la quantité d'un produit dans le panier
    const updateQuantity = (productId, quantity) => {
        setListCart(prevCart => {
            // Si le produit est dans le panier
            const product = prevCart.find(item => item.id === productId);
            if (product) {
                if (quantity <= 0) {
                    // Si la quantité est <= 0, supprimer le produit du panier (filter retourne un nouveau tableau sans ce produit)
                    return prevCart.filter(item => item.id !== productId);
                }
                // Si la quantité est > 0, mettre à jour la quantité
                return prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: quantity } : item
                );
            } else {
                // Ajouter le produit au panier s'il n'y est pas déjà avec la quantite
                const productDetails = { id: productId, quantity: quantity };
                return [...prevCart, productDetails];

            }
        });
    };


    return (
        <CartContext.Provider value={{ cartList, addToListCart, removeFromListCart, updateQuantity }}>
            {/* Rendre tous les composants enfants passés dans le provider */}
            {children}
            {/* Si il y a une notification à afficher: */}
            {notification.show && (
                <Notification message={notification.message} onClose={closeNotification} />
            )}
        </CartContext.Provider>
    );
}
