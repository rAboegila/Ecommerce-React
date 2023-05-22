import React, { useEffect, useState } from "react";
import api from "../../Lib/axios";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("category/list/").then((res) => {
      const myData = res.data;
      setCategories(res.data);
    });
  }, []);
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              Jassa Shop
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                Egypt, ITI
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="#">
                  000-000-0000
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a className="text-decoration-none" href="#">
                  jassa@itiproject.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Products
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              {categories.map((cat) => (
                <li key={"Cat" + cat.id}>
                  <Link className="text-decoration-none" href="#">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li></li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Further Info
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/products">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">
                Copyright &copy; 2023 Jassa ITI | Designed by {"ITI OSAD"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
