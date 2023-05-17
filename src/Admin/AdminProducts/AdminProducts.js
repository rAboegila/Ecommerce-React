import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';

function AdminProducts() {
  const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();

  console.log(isAdmin);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin]);



  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) || false;

  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://127.0.0.1:8000/product/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.data);
      });
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure to delete ${product.name}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://127.0.0.1:8000/product/delete/${product.id}/`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <>
      <h1>Admin Page</h1>
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
    </>
  );
}

export default AdminProducts;
