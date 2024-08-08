/**
 * Page de detail d'un produit (a besoin de l'id du produit)
 * Affiche les informations d'un produit
 * Ajoute ou supprime un produit du panier
 */

import { Link, useParams } from 'react-router-dom';
import TabBar from '../../Components/TabBar/TabBar';
import { ProductContext } from '../../Context/ProductContext';
import Button from '../../Components/Buttons/Button';
import { useContext } from 'react';
import './ProductDetailPage.css';
import QuantitySelector from '../../Components/QuantitySelector/QuantitySelector';
import Rating from '../../Components/Ratings/Rating';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetailPage() {

    // Récupère l'id du produit dans l'url
    const { id } = useParams();
    // Récupérer la liste des produits
    const { products } = useContext(ProductContext);
    // Trouver le produit correspondant
    const product = products.find(p => p.id === parseInt(id));
    // Récupérer la liste du panier et les fonction pour ajouter ou supprimer un produit
    const { cartList, addToListCart, removeFromListCart } = useContext(CartContext);

    // Vérifie si le produit est déjà dans le panier
    const isInCart = () => {
        return cartList && cartList.some(cartItem => cartItem.id === product.id);
    };


    return (
        <>
            <Link to="/" className="top-bar flex gap16">
                <span className="picto-back"></span>
                <p>My Shop</p>
            </Link>
            {/* Si le produit existe */}
            {product ? (
                // Afficher les détails du produit
                <div className="container-product-detail">
                    <div className="container-img-product-detail">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="container-texte-product-detail">
                        <div className="flex align-center justify-between mT20">
                            <h2>{product.title}</h2>
                            <p className="price-item-white">{product.price}$</p>
                        </div>
                        <div className="flex gap8">
                            {/* Donner la notation pour le composant 5étoiles */}
                            <Rating rating={product.rating.rate} />
                            <p className="rating-text">{`(${product.rating.count} ratings)`}</p>
                        </div>
                        <div>
                            <p className="description-item">{product.description}</p>
                        </div>
                        <div className="flex direction column justify-center gap32 mT40">
                            <div className="w100 flex justify-between">
                                <p>Quantity:</p>
                                {/* D0nner l'id du produit au composant */}
                                <QuantitySelector productId={product.id} />
                            </div>
                            <div className="flex justify-center">
                                {/* Si le produit est déjà dans le panier, on affiche le bouton pour le supprimer, sinon le bouton pour l'ajouter */}
                                {isInCart() ? (
                                    <Button type="removeFromCart" onClick={() => removeFromListCart(product)}>
                                        Remove from Cart
                                    </Button>
                                ) : (
                                    <Button type="addToCart" onClick={() => addToListCart(product)}>
                                        Add to Cart
                                    </Button>
                                )}
                            </div>
                            {/* Barre d'onglets en bas de la page */}
                            <div className="container-tab-bar">
                                <TabBar />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Désolé, Ce produit n'éxiste pas.</p>
            )}
        </>
    );
}