import React from 'react';

import './Product.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


export default function Product() {
 

  return (

    <div className="col-12 col-md-4 p-5 mt-3">
    <a href="#"><img src="https://therichpost.com/wp-content/uploads/2021/05/category_img_01.jpg" className="rounded-circle img-fluid border" /></a>
    <h5 className="text-center mt-3 mb-3">Watches</h5>
    <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
</div>

  );}