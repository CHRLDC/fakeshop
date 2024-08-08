import React, { createContext, useState, useEffect } from 'react';
import Notification from '../Components/Notifications/Notifications';

// Créez le contexte du panier
export const CartContext = createContext();

export default function CartProvider({ children }) {
    // Charger l'état initial du panier depuis localStorage
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
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
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
            const product = prevCart.find(item => item.id === productId);
            if (product) {
                if (quantity <= 0) {
                    return prevCart.filter(item => item.id !== productId);
                }
                return prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: quantity } : item
                );
            } else {
                const productDetails = { ...product, id: productId, quantity: quantity };
                return [...prevCart, productDetails];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartList, addToListCart, removeFromListCart, updateQuantity }}>
            {children}
            {notification.show && (
                <Notification message={notification.message} onClose={closeNotification} />
            )}
        </CartContext.Provider>
    );
}
