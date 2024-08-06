import { Link } from 'react-router-dom';
import React from 'react';
import './ProductItem.css';

export default function ProductItem({ product }) {
    return (
        <div className="container-card">
            <Link to={`/product/${product.id}`}>
                <div className="container-img-card">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="container-title-card">
                    <h2>{product.title}</h2>
                </div>
                <div className="flex justify-center">
                    <p className="price-item">{product.price}$</p>
                </div>
            </Link>
        </div>
    )
};