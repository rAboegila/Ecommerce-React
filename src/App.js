import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

//Pages
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/404/NotFound";

// Components
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import AdminProducts from './Admin/AdminProducts/AdminProducts';
import AddProduct from './Admin/AddProduct/AddProduct';
import ProductDetails from './Componets/ProducDetails/ProductDetails';
import Register from './Componets/Register/Register';
import Login from './Componets/Login/Login';
import EditProduct from './Admin/Edit Product/EditProduct';
import Newlogin from './Componets/Login/Newlogin';
import Admin from "./Admin/Admin/Admin";


export default function App() {
  
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="admin" element={<AdminProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Newlogin />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
          <Route path="/newadmin" element={<Admin />} />
      </Routes>
    
  <Footer />
    </div>
  );
}
