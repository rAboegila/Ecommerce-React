import React from 'react';

import './Carousel.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



export default function CarouselItem() {
 

  return ( 
    <div class="carousel-item active">
        <div class="container">
            <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg" alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                    <div class="text-align-left align-self-center">
                        <h1 class="h1 text-success"><b>Jassa</b> eCommerce</h1>
                        <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
   </div>
    
    

  )
};