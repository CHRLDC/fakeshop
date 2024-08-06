import React, { useState } from 'react';
import './QuantitySelector.css';

export default function QuantitySelector() {

    // Définir la quantité initiale 0
    const [quantity, setQuantity] = useState(0);

    // Fonctions pour diminuer la quantité jusqu'à 0 mini
    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };

    // Fonction pour augmenter la quantité jusqu'à 10 maxi
    const handleIncrement = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 10));
    };

    return (
        <div className="flex">
            <button className="quantity-btn" onClick={handleDecrement}>-</button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-btn" onClick={handleIncrement}>+</button>
        </div>
    );
};
