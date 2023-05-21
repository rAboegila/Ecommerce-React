import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./Pages/User/User";
import "./App.css";

//Pages
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/404/NotFound";
import WishList from "./Pages/WishList/Wishlist";
import About from "./Pages/About/About";

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
import CategoryList from "./Admin/Categories/CategoryList";
import AddCategory from "./Admin/Categories/AddCategory";
import CategoryCard from "./Componets/Category-Card/Category-Card";
import EditCategory from "./Admin/Categories/EditCategory";
import SubCategoryList from "./Admin/SubCategories/SubCategoriesList";
import AddSubCategory from "./Admin/SubCategories/AddSubCategory";
import SubCategoryCard from "./Admin/SubCategories/SubCategory-Card";
import EditSubCategory from "./Admin/SubCategories/EditSubCategory";
import UsersList from "./Admin/Users/Users";
import EditUserStatus from "./Admin/Users/EditUser";
import OrdersList from "./Admin/Orders/Orders";
import EditOrders from "./Admin/Orders/EditOrders";
import Inventory from "./Componets/Inventory/Inventory";
import AddInventory from "./Componets/Inventory/AddInventory";
import EditInventory from "./Componets/Inventory/EditInventory";
import Details from "./Pages/User/UserDetails";
import Orders from "./Pages/User/UserOrders";
import EditProduct from "./Admin/Edit Product/EditProduct";
import Newlogin from "./Componets/Login/Newlogin";
import Checkout from "./Pages/Checkout/Checkout";
import CheckSucces from "./Pages/Checkout/CheckSucces";

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
          <Route
            exact
            path="product/:productId/"
            element={<ProductDetails />}
          />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/:categoryId" element={<CategoryCard />} />
          <Route
            path="/category/update/:categoryId"
            element={<EditCategory />}
          />
          <Route path="/subcategories" element={<SubCategoryList />} />
          <Route path="/subcategory/add" element={<AddSubCategory />} />
          <Route
            path="/subcategory/:subcategoryId"
            element={<SubCategoryCard />}
          />
          <Route
            path="/subcategory/update/:subcategoryId"
            element={<EditSubCategory />}
          />
          <Route path="/users" element={<UsersList />} />
          <Route
            path="/account/:userId/change-active"
            element={<EditUserStatus />}
          />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/order/updateStatus/:orderId" element={<EditOrders />} />
          <Route path="/inventories" element={<Inventory />} />
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route
            path="/product/:productId/update_inventory/:inventoryId"
            element={<EditInventory />}
          />
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
          <Route path="/user" element={<User />}>
            <Route path="details" element={<Details />} />
            <Route path="" element={<Orders />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckSucces />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>

        <Route
          element={<ProtectedUserRoutes requiresLogin={false} redirectTo="/" />}
        >
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Newlogin />} />
        </Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
