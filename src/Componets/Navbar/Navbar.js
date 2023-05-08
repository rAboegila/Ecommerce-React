import React from 'react';

import './Navbar.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Navbar() {
 

    return ( 
        
        // <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        //   <div class="container text-light">
        //       <div class="w-100 d-flex justify-content-between">
        //           <div>
        //               <i class="fa fa-envelope mx-2"></i>
        //               <a class="navbar-sm-brand text-light text-decoration-none" href="#">info@company.com</a>
        //               <i class="fa fa-phone mx-2"></i>
        //               <a class="navbar-sm-brand text-light text-decoration-none" href="#">010-000-0000</a>
        //           </div>
        //           <div>
        //               <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
        //               <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
        //               <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
        //               <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
        //           </div>
        //       </div>
        //   </div>
        // </nav>
        
        
        
        <nav className="navbar navbar-expand-lg navbar-light shadow">
    <div className="container d-flex justify-content-between align-items-center">

        <a className="navbar-brand text-success logo h1 align-self-center" href="#">
            Jassa
        </a>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar align-self-center d-flex">
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                    <div className="input-group">
                        <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                        <div className="input-group-text">
                            <i className="fa fa-fw fa-search"></i>
                        </div>
                    </div>
                </div>
                <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                    <i className="fa fa-fw fa-search text-dark mr-2"></i>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                </a>
            </div>
        </div>

    </div>
  </nav>);
  }