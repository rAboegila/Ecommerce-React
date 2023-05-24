/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "./Category-Card";
import axios from "axios";

export default function CategoryCard() {

  const {categoryId} = useParams();


  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    axios.get(`https://ecommerce-django-ct3k.onrender.com/category/${categoryId}/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  const [categories , setCategories ] = useState([]);

  const fetch_Catgories =  () => {
     axios
      .get("https://ecommerce-django-ct3k.onrender.com/category/list/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {})
  };
  
 useEffect(() => {
   fetch_Catgories();
 },[]);


  return (
    <div className="col-12 col-md-4 p-5 mt-3" style={{display: 'inline-block'}}>
                  
     {categories.map((cat)=>{
          return(
          <div className="col-12 col-md-4 p-5 mt-3">
          <h5 className="text-center mt-3 mb-3">{cat.name}</h5>
          <p className="text-center">
            <Link style={{color: 'black'}} className="btn btn-success">Go Shop</Link>
          </p>
        </div>
      )

        })}
        

    </div>
  );
}
