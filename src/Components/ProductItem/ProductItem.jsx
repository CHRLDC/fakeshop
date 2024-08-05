import { Link } from 'react-router-dom';
import React from 'react';

export default function ProductItem({ product }) {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link to={`/produit/${product.id}`}>Détails</Link>
        </div>
    )
};