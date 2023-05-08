import React from 'react';

import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Components
import Navbar from './Componets/Navbar/Navbar';
import Product from './Componets/Product/Product';
import Carousel from './Componets/Carousel/Carousel';
import Footer from './Componets/Footer/Footer';
import AdminProducts from './Componets/AdminProducts/AdminProducts';
import { Routes, Route } from 'react-router';
import Home from './Componets/Home/Home';
import AddProduct from './Componets/AddProduct/AddProduct';
import ProductDetails from './Componets/ProducDetails/ProductDetails';

export default function App() {
  return (
    <div className="app">

      <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="adminproducts" element={<AdminProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Routes>
      <Footer />

    </div>
  );
}
