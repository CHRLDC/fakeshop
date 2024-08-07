import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx';
import { Link } from 'react-router-dom';
import './CartItem.css';

export default function CartItem({ product }) {
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
                    <QuantitySelector />
                    <p className="price-unit">{product.price}$ unit</p>
                    <p className="price-item">{product.price}$</p>
                </div>
            </div>
        </div>
    )
}