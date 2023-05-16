/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Category-Card";

export default function CategoryCard() {
  return (
    <div className="col-12 col-md-4 p-5 mt-3">
      <Link to="">
        <img
          src="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg"
          className="rounded-circle img-fluid border"
        />
      </Link>
      <h5 className="text-center mt-3 mb-3">Watches</h5>
      <p className="text-center">
        <aLink className="btn btn-success">Go Shop</aLink>
      </p>
    </div>
  );
}
