import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import api from "../../Lib/axios";


function UsersList() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token_admin");

  const [name, setName] = useState([]);
  const [active, setActive] = useState([]);

  

  useEffect(() => {
    getAllUsers();
    getActiveUsers();
  }, []);

  const getAllUsers = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/account/list-all/", {
        headers: {'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`},
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data);
      });
  };

  const getActiveUsers = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/account/list-active/", {
        headers: {'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`},
    })
      .then((res) => res.json())
      .then((data) => {
        setActive(data);
      });
  };


  return (
    <>
      <h1>USERS Page</h1>

      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birth Date</th>
            <th>Is Active</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {name.map((users) => {
            return (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.first_name}</td>
                <td>{users.last_name}</td>
                <td>{users.email}</td>
                <td>{users.date_of_birth}</td>
                {users.is_active ? <td style={{color: 'green', fontFamily: 'bold'}}>Active</td> : <td style={{color: 'red', fontFamily: 'bold'}}>Not Active</td> }
                
                
                <td>
                  <Link
                    to={`/account/${users.id}/change-active/`}
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

export default UsersList;
