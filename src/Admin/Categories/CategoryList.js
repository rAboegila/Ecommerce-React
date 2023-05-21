import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import api from "../../Lib/axios";
import axios from "axios";


function CategoryList() {
  // const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();
  const token = localStorage.getItem("token_admin");


  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/category/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  };

  const deleteCategory = (category) => {
    Swal.fire({
      title: `Are you sure to delete ${category.name}?`,
      showCancelButton: true,
    }).then( async(data) => {
      if (data.isConfirmed) {
       await axios.delete(`https://ecommerce-django-ct3k.onrender.com/category/delete/${category.id}/`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
       })
          getAllCategories();
      }
    });
  };

  return (
    <>
      <h1>Categories Page</h1>
      <Link to={"/category/add"} className="btn btn-success mt-3">
        Add new Category
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {category.map((categories) => {
            return (
              <tr key={categories.id}>
                <td>{categories.id}</td>
                <td>{categories.name}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{backgroundColor: 'red'}}
                    onClick={() => {
                      deleteCategory(categories);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/category/${categories.id}/`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/category/update/${categories.id}/`}
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

export default CategoryList;
