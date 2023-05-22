import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import api from "../../Lib/axios";
import axios from "axios";


function Inventory() {
  // const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();
  const token = localStorage.getItem("token_admin");

  let {inventoryId, productId} = useParams();


  const [inventories, setInventories] = useState([]);
//   const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllInventories();
  }, []);

  const getAllInventories = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/product/inventory/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInventories(data);
      });
  };

  const deleteInventory = (inventory) => {
    Swal.fire({
      title: `Are you sure to delete ${inventory.product}?`,
      showCancelButton: true,
    }).then( async(data) => {
      if (data.isConfirmed) {
       await axios.delete(`https://ecommerce-django-ct3k.onrender.com/product/${inventory.product_id}/delete_inventory/${inventory.id}/`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
       })
       getAllInventories();
      }
    });
  };

  return (
    <>
    <div className="container">
      <h1 style={{textAlign: 'center'}}>inventories Page</h1>
      <Link to={"/inventory/add"} className="btn btn-success mt-3">
        Add new Inventory
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => {
            return (
              <tr key={inventory.id}>
                <td>{inventory.id}</td>
                <td>{inventory.product}</td>
                <td>{inventory.color}</td>
                <td>{inventory.size}</td>
                <td>{inventory.quantity}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{backgroundColor: 'red'}}
                    onClick={() => {
                      deleteInventory(inventory);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/product/${inventory.product_id}/update_inventory/${inventory.id}/`}
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

export default Inventory;
