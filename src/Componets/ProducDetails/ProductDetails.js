import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails(){

const [product, setProduct] = useState();

let {productId} = useParams();

useEffect(()=>{
    fetch(`https://ecommerce-django-ct3k.onrender.com/product/${productId}/`)
    .then((res)=> res.json())
    .then((product)=>{
        console.log(product);
        setProduct(product)
    })
},[])

    return (
        <>

<div className="container">
      {product && (
        <div className="row">
          <div className="col-md-6">
            <img src={product.imageUrl} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <h2>{product.parent_category}</h2>
            <h2>{product.subcategory}</h2>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <Link to="/admin" className="btn btn-info">Back To Admin Page</Link> 
          </div>
        </div>
      )}
    </div>

        </>

    )
}

export default ProductDetails;