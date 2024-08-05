import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import React, { useContext } from 'react';

export default function ProductDetailPage() {

    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const product = products.find(p => p.id === parseInt(id));

    return (
        <div>
            {product ? (
                <>
                    <h1>Ici c'est ProductDetailPage de produit {id}</h1>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.image}</p>

                </>
            ) : (
                <p>Ce produit n'éxiste pas</p>
            )}
        </div>
    );
}