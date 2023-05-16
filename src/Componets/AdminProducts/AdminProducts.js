import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../REDUXES/authSlice";

function AdminProducts() {
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) || false;

    console.log(isLoggedIn);

    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/login");
        }
      }, [isLoggedIn, navigate]);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts()

    }, [])

    const getAllProducts = ()=>{
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)

            });
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are you sure to delete ${product.title}?`,
            showCancelButton: true

        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`https://fakestoreapi.com/products/${product.id}`, {
                    method: "DELETE",
                }).then((res) => res.json())
                    .then((data) => {
                        getAllProducts();
                    })
            }
        })


    }

    return (
        <>
            <h1>Admin Page</h1>
            <Link to={'/products/add'} className="btn btn-success mt-3">Add new product</Link>
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
                                <td>{product.title}</td>
                                <td>{product.price}$</td>
                                <td>
                                    <img  className="productImg" src={product.image} />
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => { deleteProduct(product) }}>Delete</button>
                                    <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                    <Link to={`/products/${product.id}/edit`} className="btn btn-primary btn-sm">Edit</Link>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </>


    )
}

export default AdminProducts;