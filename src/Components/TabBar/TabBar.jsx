import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import './TabBar.css';

export default function TabBar() {
    // Donner la liste du panier
    const { cartList } = useContext(CartContext);

    return (
        <div className="container-TabBar flex justify-between">
            <Link to="/" className="tab-picto home"></Link>
            <Link to="/cart" className="tab-picto cart"></Link>
            <span className="tab-notif">{cartList ? cartList.length : 0}</span>
            <span className="tab-picto profil"></span>
            <span className="tab-picto parametre"></span>
        </div>
    );
}
