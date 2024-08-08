import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import './TabBar.css';

export default function TabBar() {
    // Donner la liste du panier
    const { cartList } = useContext(CartContext);
    // Donner le nombre de produit dans le panier
    const productNumer = cartList && cartList.reduce((acc, product) => acc + product.quantity, 0);


    return (
        <div className="container-TabBar flex justify-between">
            <Link to="/" className="tab-picto home"></Link>
            <Link to="/cart" className="tab-picto cart">
                <span className="tab-notif">{productNumer.toFixed(0)}</span>
            </Link>
            <span className="tab-picto profil"></span>
            <span className="tab-picto parametre"></span>
        </div>
    );
}
