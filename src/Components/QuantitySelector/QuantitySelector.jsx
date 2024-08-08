/**
 * Composant permettant de modifier la quantité d'un produit
 * Ajoute ou supprime un produit du panier
 */

import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { ProductContext } from '../../Context/ProductContext';
import './QuantitySelector.css';

export default function QuantitySelector({ productId }) {

    // Récupérer la liste des produits du panier, et les fonctions de gestion du panier
    const { cartList, updateQuantity, addToListCart } = useContext(CartContext);
    // Récupérer la liste de tous les articles
    const { products } = useContext(ProductContext);

    // Trouver le produit complet dans la liste des produits (pour lui ajouter la quantité)
    const fullProduct = products.find(p => p.id === productId);
    // Définir le produit dans le panier
    const productInCart = cartList.find(item => item.id === productId);

    // Obtenir la quantité sinon 0
    const quantity = productInCart ? productInCart.quantity : 0;

    // Fonction pour Diminuer la quantité (jusqu'à suppression du produit)
    const handleDecrement = () => {
        if (productInCart) {
            updateQuantity(productId, productInCart.quantity - 1);
        }
    };

    // Fonction pour Augmenter la quantité (de l'ajout d'un produit au panier)
    const handleIncrement = () => {
        if (productInCart) {
            updateQuantity(productId, productInCart.quantity + 1);
        } else if (fullProduct) {
            // Ajouter le produit complet avec une quantité de 1
            addToListCart(fullProduct);
        }
    };

    // Gérer le changement direct dans l'input
    const handleChange = (event) => {
        const newQuantity = Math.max(parseInt(event.target.value, 10), 0);
        if (productInCart) {
            updateQuantity(productId, newQuantity);
        } else if (fullProduct) {
            addToListCart({ ...fullProduct, quantity: newQuantity });
        }
    };

    return (
        <div className="flex">
            <button className="quantity-btn" onClick={handleDecrement}>-</button>
            <input
                className="quantity-value"
                type="number"
                value={quantity}
                onChange={handleChange}
                min="0"
            />
            <button className="quantity-btn" onClick={handleIncrement}>+</button>
        </div>
    );
}
