/**
 * Composant Bouton
 */
import React from 'react';
import './Button.css';

export default function Button({ type, children, onClick, isYellow }) {

    // Récupérer le type du bouton
    const getButtonType = () => {
        switch (type) {
            case 'cta':
                return 'button cta';
            case 'addToCart':
                return 'button add-to-cart';
            case 'payment':
                return 'button payment';
            case 'removeFromCart':
                return 'button remove-from-cart';
            case 'category':
                return 'button category';
            default:
                return 'button';
        }
    };

    // Afficher l'icône correspondante
    const showIcon = ['addToCart', 'payment', 'removeFromCart'].includes(type);

    return (
        <button
            className={`flex gap8 ${getButtonType()} ${isYellow ? 'button-yellow' : ''}`}
            onClick={onClick}
        >
            {/* Si le bouton a un icône, l'afficher */}
            {showIcon && <span className={`picto-button picto-${type}`} />}
            <span className="button-text">{children}</span>
        </button>
    );
};
