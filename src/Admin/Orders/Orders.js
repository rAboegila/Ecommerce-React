import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import api from "../../Lib/axios";


function OrdersList() {
  // const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();

  let {orderId} = useParams();

  const token = localStorage.getItem("token_admin");

  const [order, serOrder] = useState([]);

  

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/order/all/", {
        headers: {'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`},
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        serOrder(data);
      });
  };


  return (
    <>
    <div className="container">
      <h1 style={{textAlign: 'center'}}>Orders Page</h1>

      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Payment Method</th>
            <th>Shipping Address</th>
            <th>Created at</th>
            <th>Delivered Time</th>
            <th>Shipped Time</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {order.map((orders) => {
            return (
              <tr key={orders.id}>
                <td>{orders.id}</td>
                <td>{orders.username}</td>
                <td>{orders.payment_method}</td>
                <td>{orders.shipping_address}</td>
                <td>{orders.created_at}</td>
                <td>{orders.delivered_time}</td>
                <td>{orders.shipped_time}</td>
                <td>{orders.total}</td>
                <td style={{fontWeight: 1000, color:'green'}}>{orders.status}</td>
                <td>
                  <Link
                    to={`/order/updateStatus/${orders.id}/`}
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

export default OrdersList;
