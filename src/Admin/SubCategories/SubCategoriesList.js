import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import api from "../../Lib/axios";
import axios from "axios";


function SubCategoryList() {
  // const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();
  const token = localStorage.getItem("token_admin");


  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    getAllSubCategories();
  }, []);

  const getAllSubCategories = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/subcategory/list/")
      .then((res) => res.json())
      .then((data) => {
        setSubCategory(data);
      });
  };

  const deleteSubCategory = (subcategory) => {
    Swal.fire({
      title: `Are you sure to delete ${subcategory.name}?`,
      showCancelButton: true,
    }).then( async(data) => {
      if (data.isConfirmed) {
       await axios.delete(`https://ecommerce-django-ct3k.onrender.com/subcategory/delete/${subcategory.id}/`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
       })
          getAllSubCategories();
      }
    });
  };

  return (
    <>
      <h1>SubCategories Page</h1>
      <Link to={"/subcategory/add"} className="btn btn-success mt-3">
        Add new SubCategory
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Parent Category</th>
            <th>Title</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {subcategory.map((subcategories) => {
            return (
              <tr key={subcategories.id}>
                <td>{subcategories.id}</td>
                <td style={{color: 'red', fontFamily: 'Bold'}}>{subcategories.category}</td>
                <td>{subcategories.name}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{backgroundColor: 'red'}}
                    onClick={() => {
                      deleteSubCategory(subcategories);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/subcategory/${subcategories.id}/`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/subcategory/update/${subcategories.id}/`}
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

export default SubCategoryList;
