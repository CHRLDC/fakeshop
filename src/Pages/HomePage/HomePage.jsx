import ProductList from '../../Components/ProductList/ProductList';
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import Button from '../../Components/Buttons/Button';
import './HomePage.css';
import TabBar from '../../Components/TabBar/TabBar';

export default function HomePage() {

    const { products } = useContext(ProductContext);

    return (
        <div>
            <div className="top-bar flex justify-between">
                <p>My Shop</p>
                <span className="picto-loup"></span>
            </div>
            <div className="home-acceuil">
                <div>
                    <p className='title'>Fall 2024 collection</p>
                    <h1>Discover the new ready-to-wear collections for men and women.</h1>
                    <Button type="cta">see what's new</Button>
                </div>
            </div>
            <div className="caroussel-button gap16">
                <Button type="category" style={{ backgroundColor: 'var(--color-yellow)' }}>All</Button>
                <Button type="category">Women</Button>
                <Button type="category">Men</Button>
                <Button type="category">Jowellery</Button>
                <Button type="category">Electronics</Button>
            </div>
            <ProductList products={products} />
            <div className="container-tab-bar">
                <TabBar />
            </div>
        </div>
    );
}