import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import Button from '../Buttons/Button';
import './TabBarCart.css';

export default function TabBarCart() {

    // Donner la liste du panier
    const { CartList } = useContext(CartContext);


    return (
        <div className="container-tapbarcart">
            <div className="flex justify-between">
                <p><b>Total:</b></p>
                <p className="price-unit">{CartList.length} articles</p>
                <p className="price-total">{CartList.reduce((acc, product) => acc + product.price, 0)}$</p>
            </div>
            <div>
                <p className="price-unit w70 mT20"><i>Transport is free ! You will receive your products under 4 days</i></p>
            </div>
            <div className="w100 flex justify-between">
                <ul className="flex gap3">
                    <li className="picto-cart visa"></li>
                    <li className="picto-cart mastercard"></li>
                    <li className="picto-cart paypal"></li>
                </ul>
                <Button type="payment">Payment</Button>
            </div>
        </div>
    );
}