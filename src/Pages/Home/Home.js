import React, { useState } from "react";
// import { useDispatch } from "react-redux";

import api from "../../Lib/api";
import "./Home.css";
import { useEffect } from "react";

// Components
import CategoryCard from "../../Componets/Category-Card/Category-Card";
import HeroCarousel from "../../Componets/Carousel/Carousel";
import axios from "axios";
import Link from "antd/es/typography/Link";


export default function Home() {
  // const dispatch = useDispatch();

   const [category , setCategory ] = useState([]);

   const fetch_Catgories =  () => {
      axios
       .get("https://ecommerce-django-ct3k.onrender.com/category/list/")
       .then((res) => {
         console.log(res.data);
         setCategory(res.data);
       })
       .catch((err) => console.log("error\n", err));
   };
   
  useEffect(() => {
    fetch_Catgories();
  },[]);


  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://ecommerce-django-ct3k.onrender.com/product/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  return (
    <>
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <form
            action=""
            method="get"
            className="modal-content modal-body border-0 p-0"
          >
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="input-group-text bg-success text-light"
              >
                <i className="fa fa-fw fa-search text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <HeroCarousel />

      <section className="container py-5">
        <div className="row text-center pt-3" >
          <div className="col-lg-6 m-auto" >
            <h1 className="h1">Categories of The Month</h1>
        {category.map((cat)=>{
          return(
          <div className="col-12 col-md-4 p-5 mt-3" style={{display: "inline-block"}}>
          <h5 className="text-center mt-3 mb-3">{cat.name}</h5>
          <p className="text-center">
            <Link style={{color: 'black'}} className="btn btn-success">Go Shop</Link>
          </p>
        </div>
      )

        })}
            <p>
            Discover our wide range of categories, tailored to suit your style and preferences. Explore our diverse collection of clothing categories, featuring the latest trends and timeless classics. Browse through our carefully curated categories to find the perfect outfit for any occasion. From trendy tops to elegant dresses and stylish accessories, our categories have something for everyone.
            </p>
          </div>
        </div>
        <div className="row">
          
        {/* <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/> */}

        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>

              <p>
              Explore our extensive collection of products, carefully curated to meet your fashion needs. Discover a wide variety of high-quality clothing items in our product selection, designed to cater to different styles and tastes. Browse through our diverse range of products, including tops, bottoms, dresses, outerwear, and accessories, to find the perfect pieces for your wardrobe.
              </p>
            </div>
          </div>
          <div className="row">
          {products.map((prod)=>{
                return(
                  
            <div className="col-12 col-md-4 mb-4">
                  
              <div className="card h-100">
                <a href="#">
                  <img
                  style={{height: 471}}
                    src={prod.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li className="text-muted text-right">${prod.price}</li>
                  </ul>
                  <a href="#" className="h2 text-decoration-none text-dark">
                    {prod.name}
                  </a>
                  <p className="card-text">
                    {prod.description}
                  </p>
                </div>
              </div>
                  
              </div>
                  
                )
              })}
        </div>
        </div>
      </section>
    </>
  );
}
