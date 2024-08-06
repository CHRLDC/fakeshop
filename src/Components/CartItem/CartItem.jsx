import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx';
import './CartItem.css';

export default function CartItem({ product }) {
    return (
        <div className="cart-item flex gap8">
            <div className="container-img-cart-item">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="container-text-cart-item">
                <h2>{product.title}</h2>
                <div className="flex justify-between mT10">
                    <QuantitySelector />
                    <p className="price-unit">{product.price}$ unit</p>
                    <p className="price-item">{product.price}$</p>
                </div>
            </div>
        </div>
    )
}