import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Redux
import {
  openCart,
  getNumItems,
  fetchCartItems,
} from "../../Features/cart/cartSlice";

//Components
import Cart from "../Cart/Cart";
// import Logout from "../Logout";

import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartLength = useSelector(getNumItems);
  console.log(cartLength);
  const showDrawer = () => {
    dispatch(openCart());
  };
  const isAdmin = useSelector((state) => state.user.is_admin);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCartItems());
      console.log("numberOfItems  ", cartLength);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink
          className="navbar-brand text-success logo h1 align-self-center"
          href="#"
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
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar align-self-center d-flex">
            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputMobileSearch"
                  placeholder="Search ..."
                />
                <div className="input-group-text">
                  <i className="fa fa-fw fa-search"></i>
                </div>
              </div>
            </div>
            <NavLink
              className="nav-icon d-none d-lg-inline"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#templatemo_search"
            >
              <i className="fa fa-fw fa-search text-dark mr-2"></i>
            </NavLink>
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
              href="#"
            >
              <i className="fa fa-fw fa-user text-dark mr-3"></i>
              {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                +99
              </span> */}
            </NavLink>
          </div>
          {isAdmin && (
            <Link
              className="mx-1"
              style={{ textDecoration: "none" }}
              to={"/admin"}
            >
              Adminnn
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
        </div>
      </div>

      <Cart />
    </nav>
  );
}
