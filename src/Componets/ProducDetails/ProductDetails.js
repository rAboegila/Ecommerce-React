import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";

function ProductDetails(){

const [product, setProduct] = useState();

let {productId} = useParams();

useEffect(()=>{
    fetch(`https://ecommerce-django-app.onrender.com/products/${productId}`)
    .then((res)=> res.json())
    .then((product)=>{
        console.log(product);
        setProduct(product)
    })
},[])

    return (
        <>
        { product && 
        <>
        <img src={product.image} />
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        </>
        }
        <Link to="/adminproducts" className="btn btn-info">Back To Admin Page</Link> 
        </>

    )
}

export default ProductDetails;