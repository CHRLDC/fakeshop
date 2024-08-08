/**
 * Page du panier
 * Affiche la liste des produits du panier (avec les montants et les quantités) (via CartItem)
 * Ajoute ou supprime un produit du panier (via QuantitySelector)
 */

import './CartPage.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../../Components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import TabBarCart from '../../Components/TabBarCart/TabBarCart';
import TabBar from '../../Components/TabBar/TabBar';

export default function CartPage() {

    // Récupérer la liste du panier
    const { cartList } = useContext(CartContext);

    return (
        <div className="container-cart">
            <Link to="/" className="top-bar flex gap16">
                <span className="picto-back"></span>
                <p>My Shop</p>
            </Link>
            <div>
                {/* Si le panier est vide */}
                {cartList && cartList.length === 0 ? (
                    <p className="cart-vide">Votre panier est vide</p>
                ) : (
                    <ul>
                        {/* Afficher la liste des produits du panier */}
                        {cartList && cartList.map((product) => (
                            <li key={product.id}>
                                <CartItem product={product} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* TabBarCart gère l'affichage des totaux du panier */}
            <TabBarCart />
            <TabBar />
        </div>
    );
}
