import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import './Product-Card.css';


export default function ProductCard() {
 


  return (

    <div class="col-12 col-md-4 p-5 mt-3">
    <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg" class="rounded-circle img-fluid border" /></a>
    <h5 class="text-center mt-3 mb-3">Watches</h5>
    <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
</div>

  );}