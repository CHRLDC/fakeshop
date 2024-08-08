import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import './TabBar.css';

export default function TabBar() {
    const { cartList } = useContext(CartContext);
    const productNumer = cartList && cartList.reduce((acc, product) => acc + product.quantity, 0);

    // Utilisez useLocation pour obtenir l'URL actuelle
    const location = useLocation();

    return (
        <div className="container-TabBar flex justify-between">
            <Link to="/" className={`tab-picto home ${location.pathname === '/' ? 'active' : ''}`}></Link>
            <Link to="/cart" className={`tab-picto cart ${location.pathname === '/cart' ? 'active' : ''}`}>
                <span className="tab-notif">{productNumer.toFixed(0)}</span>
            </Link>
            <span className="tab-picto profil"></span>
            <span className="tab-picto parametre"></span>
        </div>
    );
}
