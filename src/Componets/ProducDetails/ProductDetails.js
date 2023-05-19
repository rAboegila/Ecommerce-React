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
        setProduct(product.data)
    })
},[])

    return (
        <>
        { product && 
        <>
        <img src={product.imageUrl} />
        <h1>{product.name}</h1>
        <h2>{product.parent_category}</h2>
        <h2>{product.subcategory}</h2>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        </>
        }
        <Link to="/admin" className="btn btn-info">Back To Admin Page</Link> 
        </>

    )
}

export default ProductDetails;