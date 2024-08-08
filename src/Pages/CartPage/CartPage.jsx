import './CartPage.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../../Components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import TabBarCart from '../../Components/TabBarCart/TabBarCart';
import TabBar from '../../Components/TabBar/TabBar';

export default function CartPage() {
    // Donner la liste du panier
    const { cartList } = useContext(CartContext);
    return (
        <div className="container-cart">
            <Link to="/" className="top-bar flex gap16">
                <span className="picto-back"></span>
                <p>My Shop</p>
            </Link>
            <div>
                {cartList && cartList.length === 0 ? (
                    <p className="cart-vide">Votre panier est vide</p>
                ) : (
                    <ul>
                        {cartList && cartList.map((product) => (
                            <li key={product.id}>
                                <CartItem product={product} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <TabBarCart />
            <TabBar />
        </div>
    );
}
