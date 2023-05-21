import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

//Pages
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/404/NotFound";
import WishList from "./Pages/WishList/Wishlist";

// Components
import Navbar from "./Componets/Navbar/Navbar";
import Footer from "./Componets/Footer/Footer";
import AdminProducts from "./Admin/AdminProducts/AdminProducts";
import AddProduct from "./Admin/AddProduct/AddProduct";
import ProductDetails from "./Componets/ProducDetails/ProductDetails";
import Register from "./Componets/Register/Register";
import Login from "./Componets/Login/Login";
import EditProduct from "./Admin/Edit Product/EditProduct";
import Newlogin from "./Componets/Login/Newlogin";
import Admin from "./Admin/Admin/Admin";
import ProtectedRoutes from "./Lib/ProtectedRoutes";
import ProtectedUserRoutes from "./Lib/ProtectedUserRoute";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          element={<ProtectedRoutes requiresLogin={true} redirectTo="/" />}
        >
          <Route path="adminproducts" element={<AdminProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="/product/update/:productId" element={<EditProduct />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route
          element={
            <ProtectedUserRoutes requiresLogin={true} redirectTo="/login" />
          }
        >
          <Route
            exact
            path="product/:productId/"
            element={<ProductDetails />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>

        <Route
          element={<ProtectedUserRoutes requiresLogin={false} redirectTo="/" />}
        >
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Newlogin />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
