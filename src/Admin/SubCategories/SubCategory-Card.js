
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
// import "./ProductDetails.css";

function SubCategoryCard(){

const [subcategory, setSubCategory] = useState();

let {subcategoryId} = useParams();

useEffect(()=>{
    fetch(`https://ecommerce-django-ct3k.onrender.com/subcategory/${subcategoryId}/`)
    .then((res)=> res.json())
    .then((subcategory)=>{
        console.log(subcategory);
        setSubCategory(subcategory)
    })
},[])

    return (
        <>

<div className="container">
      {subcategory && (
        <div className="row">
          
          <div className="col-md-6">
            <h1 className="btn btn-primary" style={{width: 150}}>{subcategory.name}</h1>
            <h2>{subcategory.category}</h2>
            <Link to="/subcategories" className="btn btn-info">Back To SubCategories Page</Link> 
          </div>
        </div>
      )}
    </div>

        </>

    )
}

export default SubCategoryCard;
