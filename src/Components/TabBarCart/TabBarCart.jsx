/**
 * Composant tapbarre de CartPage.jsx
 * Affiche le nombre de produit et le prix total de cartList
 */

import { CartContext } from '../../Context/CartContext';
import Order from '../Order/Order';
import { useContext, useState } from 'react';
import Button from '../Buttons/Button';
import './TabBarCart.css';

export default function TabBarCart() {

    // Récupérer la liste du panier
    const { cartList } = useContext(CartContext);

    // Donner le nombre de produit dans le panier (nombre d'articles et leurs quantités)
    const productNumber = cartList && cartList.reduce((acc, product) => acc + product.quantity, 0);
    // Donner le prix total (prix * quantité)
    const cartTotal = cartList && cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
    // Pluriel ou singulier
    const articleText = productNumber > 1 ? "articles" : "article";


    // Afficher le formulaire de paiement (exo: sentoserver)
    const [isOrder, setIsOrder] = useState(false);

    // Function pour ouvrir le paiement (exo: sentoserver)
    const handlePaymentClick = () => {
        setIsOrder(true);
    };

    // Function pour fermer le paiement (exo: sentoserver)
    const handleCloseOrder = () => {
        setIsOrder(false);
    };

    return (
        <div className="container-tapbarcart">
            <div className="flex justify-between">
                <p><b>Total:</b></p>
                {/* Afficher le prix total et le nombre d'article */}
                <p className="price-unit">{productNumber.toFixed(0)} {articleText}</p>
                <p className="price-total">{cartTotal.toFixed(2)}$</p>
            </div>
            <div>
                <p className="price-unit w70 mT20"><i>Transport is free! You will receive your products under 4 days</i></p>
            </div>
            <div className="w100 flex justify-between">
                <ul className="flex gap3">
                    <li className="picto-cart visa"></li>
                    <li className="picto-cart mastercard"></li>
                    <li className="picto-cart paypal"></li>
                </ul>
                <Button type="payment" onClick={handlePaymentClick}>Payment</Button>
            </div>
            {/* Si le formulaire de paiement est ouvert, afficher la commande */}
            {isOrder && <Order onClose={handleCloseOrder} />}
        </div>
    );
}
