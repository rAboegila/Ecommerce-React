import { useEffect, useState, useMemo } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from "../../Lib/IsAdmin";
import api from "../../Lib/axios";
import axios from "axios";

function AdminProducts() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token_admin");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure to delete ${product.name}?`,
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        await axios.delete(
          `https://ecommerce-django-ct3k.onrender.com/product/delete/${product.id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        getAllProducts();
      }
    });
  };

  return (
    <>
    <div className="container">
      <h1 style={{textAlign: 'center'}}>Admin Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add new product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                  <img className="productImg" src={product.imageUrl} />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      deleteProduct(product);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/product/${product.id}/`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/product/update/${product.id}/`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default AdminProducts;
