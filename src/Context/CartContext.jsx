import React, { createContext, useState } from 'react';
import Notification from '../Components/Notifications/Notifications';

// Créez le contexte du panier
export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Créer un tableau vide pour la liste du panier
    const [cartList, setListCart] = useState([]);

    // Gérer l'état de la notification
    const [notification, setNotification] = useState({ show: false, message: '' });

    // Fermer la notification
    const closeNotification = () => {
        setNotification({ show: false, message: '' });
    };

    // Ajouter un produit au panier
    const addToListCart = (product) => {
        setListCart([...cartList, product]);
        setNotification({ show: true, message: 'Produit ajouté au panier' });
    };

    // Supprimer un produit du panier
    const removeFromListCart = (product) => {
        setListCart(cartList.filter((item) => item.id !== product.id));
        setNotification({ show: true, message: 'Produit supprimé du panier' });
    };
    return (
        <CartContext.Provider value={{ cartList, addToListCart, removeFromListCart }}>
            {children}
            {notification.show && (
                <Notification message={notification.message} onClose={closeNotification} />
            )}
        </CartContext.Provider>
    )
}
