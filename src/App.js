import React from 'react';
import { Route, Routes } from "react-router-dom"

import './App.css';

//Pages
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';

// Components
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import AdminProducts from './Componets/AdminProducts/AdminProducts';
import AddProduct from './Componets/AddProduct/AddProduct';
import ProductDetails from './Componets/ProducDetails/ProductDetails';
import Register from './Componets/Register/Register';
import Login from './Componets/Login/Login';
import EditProduct from './Componets/Edit Product/EditProduct';
import Newlogin from './Componets/REDUXES/Newlogin';
import { Provider } from 'react-redux';
import store from './Componets/REDUXES/store';

export default function App() {
  return (
    <div className="app">
      
      <Navbar />
          <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="admin" element={<AdminProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Newlogin />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
      </Routes>
          </Provider>
    
  <Footer />


    </div>
  );
}
