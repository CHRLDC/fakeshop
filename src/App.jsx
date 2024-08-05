import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage';
import CartPage from './Pages/CartPage/CartPage';
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit/:id" element={<ProductDetailPage />} />
        <Route path="/panier" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
