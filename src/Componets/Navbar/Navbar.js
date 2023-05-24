/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Features/auth/authSlice";
import { setIsAdmin, selectIsAdmin } from "../../Lib/IsAdmin";

//Redux
import {
  openCart,
  getNumItems,
  fetchCartItems,
} from "../../Features/cart/cartSlice";

import {
  fetchItems,
  getWishNumItems,
} from "../../Features/wishlist/wishlistSlice";

import {
  fetchProfile,
  removeUser,
  getProfile,
} from "../../Features/user/userSlice";
//Components
import Cart from "../Cart/Cart";
// import Logout from "../Logout";

import "./Navbar.css";

export default function Navbar() {
  const is_admin = useSelector(selectIsAdmin);

  const onLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token_admin");
    if (is_admin === true) {
      dispatch(setIsAdmin(false));
    }
    dispatch(logout());
    dispatch(removeUser());
    navigate("/login");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartLength = useSelector(getNumItems);
  const wishLength = useSelector(getWishNumItems);
  const showDrawer = () => {
    dispatch(openCart());
  };
  const isAdmin = useSelector((state) => state.user.is_admin);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("isLoggedIN", isLoggedIn);
  const profile = useSelector(getProfile);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCartItems());
      dispatch(fetchItems());
      dispatch(fetchProfile());
    }
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchProfile());
    }
  }, [isLoggedIn]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink
          className="navbar-brand text-success logo h1 align-self-center"
          to="/"
        >
          Jassa
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
          id="templatemo_main_nav"
        >
          {!isAdmin && isLoggedIn && (
            <>
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                      Shop
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <NavLink
                  className="nav-icon position-relative text-decoration-none"
                  onClick={showDrawer}
                >
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    {cartLength}
                  </span>
                </NavLink>
                <NavLink
                  className="nav-icon position-relative text-decoration-none"
                  to="/wishlist"
                >
                  <i className="fa fa-fw fa-heart text-dark mr-1"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    {wishLength}
                  </span>
                </NavLink>

                <NavLink
                  className="nav-icon position-relative text-decoration-none"
                  to="/user"
                >
                  {/* <i className="fa fa-fw fa-user text-dark mr-3"></i> */}
                  <img src={profile.profileImgUrl} alt="" />
                </NavLink>
              </div>{" "}
            </>
          )}

          {isAdmin && (
            <Link
              className="mx-3 btn btn-info"
              style={{ textDecoration: "none" }}
              to={"/admin"}
            >
              Admin
            </Link>
          )}

          {isAdmin && (
            <Link
              className="mx-1"
              style={{ textDecoration: "none" }}
              to={"/admin"}
            >
              Admin
            </Link>
          )}

          {!isLoggedIn && !isAdmin ? (
            <>
              <Link
                className="mx-1 btn btn-primary"
                style={{ textDecoration: "none" }}
                to={"/login"}
              >
                Login
              </Link>{" "}
              <Link
                className="mx-1 btn btn-primary"
                style={{ textDecoration: "none" }}
                to={"/register"}
              >
                Register
              </Link>
            </>
          ) : (
            ""
          )}

          {isLoggedIn || isAdmin ? (
            <button className="btn btn-primary" onClick={onLogOut}>
              LOGOUT
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <Cart />
    </nav>
  );
}
