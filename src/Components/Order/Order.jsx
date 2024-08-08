/**
 * Composant de l'interface de commande (pour l'exercice)
 */

import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Order.css';


export default function Order({ onClose }) {

    //  Définir la liste des produits du panier
    const { cartList } = useContext(CartContext);


    return (
        <div >
            <div className="flex gap16">
                <h2>Order send to Server</h2>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <ul className="order-container">
                {cartList.map(product => (
                    <li key={product.id} className="order-item">
                        <span>Product id: {product.id}</span><br />
                        <span>Quantity: {product.quantity}</span><br />
                        <span>Price unity: {product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
