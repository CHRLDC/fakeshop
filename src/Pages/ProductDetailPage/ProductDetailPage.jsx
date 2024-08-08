import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import Button from '../../Components/Buttons/Button';
import { useContext } from 'react';
import './ProductDetailPage.css';
import QuantitySelector from '../../Components/QuantitySelector/QuantitySelector';
import Rating from '../../Components/Ratings/Rating';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetailPage() {

    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const product = products.find(p => p.id === parseInt(id));
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
            {product ? (
                <div className="container-product-detail">
                    <div className="container-img-product-detail">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="container-texte-product-detail">
                        <div className="flex align-center justify-between mT20">
                            <h2>{product.title}</h2>
                            <p className="price-item-white">{product.price}$</p>
                        </div>
                        <div className="flex gap16">
                            <Rating rating={product.rating.rate} />
                            <p className="rating-text">{`(${product.rating.count} ratings)`}</p>
                        </div>
                        <div>
                            <p className="description-item">{product.description}</p>
                        </div>
                        <div className="flex direction column justify-center gap32 mT40">
                            <div className="w100 flex justify-between">
                                <p>Quantity:</p>
                                <QuantitySelector productId={product.id} />
                            </div>
                            <div className="flex justify-center">
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
                        </div>
                    </div>
                </div>
            ) : (
                <p>Désolé, Ce produit n'éxiste pas.</p>
            )}
        </>
    );
}