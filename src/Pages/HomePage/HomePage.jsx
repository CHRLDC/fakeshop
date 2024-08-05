import ProductList from '../../Components/ProductList/ProductList';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';

export default function HomePage() {

    const { products } = useContext(ProductContext);

    return (
        <div>
            <h1>Ici c'est HomePage</h1>
            <ProductList products={products} />
        </div>
    );
}