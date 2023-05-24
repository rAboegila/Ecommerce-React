/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Category-Card";

export default function CategoryCard(prop) {
  console.log(prop.category);
  return (
    <div style={{ marginRight: 10, marginLeft: 10 }}>
      <h5 className="text-center mt-3 mb-3">{prop.category.name}</h5>
      <p className="text-center">
        <Link
          to="/products"
          style={{ color: "black" }}
          className="btn btn-success"
        >
          Go Shop
        </Link>
      </p>
    </div>
  );
}
