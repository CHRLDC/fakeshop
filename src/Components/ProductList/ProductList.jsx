import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

export default function ProductList({ products }) {

    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}