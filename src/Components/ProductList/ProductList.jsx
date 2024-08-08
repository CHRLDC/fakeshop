/**
 * Composant Liste de produit
 */

import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

export default function ProductList({ products }) {

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}