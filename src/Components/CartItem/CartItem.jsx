import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx';
import { Link } from 'react-router-dom';
import './CartItem.css';

export default function CartItem({ product }) {

    // Calculer le prix total en fonction de la quantité
    const totalPrice = (product.price * product.quantity).toFixed(2);

    return (
        <div className="cart-item flex gap8">
            <Link to={`/product/${product.id}`} className="container-img-cart-item">
                <img src={product.image} alt={product.title} />
            </Link>
            <div className="container-text-cart-item">
                <Link to={`/product/${product.id}`}>
                    <h2>{product.title}</h2>
                </Link>
                <div className="flex justify-between mT10">
                    <QuantitySelector productId={product.id} />
                    <p className="price-unit">{product.price}$ unit</p>
                    <p className="price-item">{totalPrice}$</p>
                </div>
            </div>
        </div>
    )
}