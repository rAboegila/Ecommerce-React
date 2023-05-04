import React from 'react';

import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Components
import Navbar from './Componets/Navbar/Navbar';
import Product from './Componets/Product/Product';
import Carousel from './Componets/Carousel/Carousel';
import Footer from './Componets/Footer/Footer';

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form action="" method="get" className="modal-content modal-body border-0 p-0">
            <div className="input-group mb-2">
              <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
              <button type="submit" className="input-group-text bg-success text-light">
                <i className="fa fa-fw fa-search text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
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
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_02.jpg" alt="" />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left">
                                  <h1 class="h1">Lorem Ipsum</h1>
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
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_03.jpg" alt="" />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left">
                                  <h1 class="h1">Lorem Ipsum</h1>
                                  <h3 class="h2">Lorem Ipsum Lorem Ipsum </h3>
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
          </div>
          <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
              <i class="fas fa-chevron-left"></i>
          </a>
          <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
              <i class="fas fa-chevron-right"></i>
          </a>
        </div> */}

      <Carousel />

      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row">
          <Product />
          <Product />
          <Product />

        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_01.jpg" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-muted fa fa-star" />
                      <i className="text-muted fa fa-star" />
                    </li>
                    <li className="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="#" className="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-muted fa fa-star" />
                      <i className="text-muted fa fa-star" />
                    </li>
                    <li className="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="#" className="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                  <p className="card-text">
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                  </p>
                  <p className="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                    </li>
                    <li className="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="#" className="h2 text-decoration-none text-dark">Lorem Ipsum</a>
                  <p className="card-text">
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum.
                  </p>
                  <p className="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
