import React from 'react';
import './Rating.css';

export default function StarRating({ rating, maxRating = 5 }) {
    // Fonction pour générer un tableau d'étoiles
    const stars = Array.from({ length: maxRating }, (_, index) => {
        const starIndex = index + 1;
        // Vérifie si l'étoile doit être remplie
        const isFilled = starIndex <= rating;
        return (
            <span
                key={starIndex}
                className={`star ${isFilled ? 'filled' : ''}`}
                aria-label={`${isFilled ? 'Filled' : 'Empty'} star`}
            >
                ★
            </span>
        );
    });

    return <div className="star-rating">{stars}</div>;
};