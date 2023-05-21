import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./About.css";
export default function About() {
  return (
    <div className="background-radial-gradient">
      <div className="m-0">
        <div className="container py-2">
          <div className="row h-100 align-items-center py-5">
            <div className="hero me-5  p-5 me-2 col-lg-12 rounded-4">
              <h1 style={{ color: "#352a2a" }} className="fs-1 mb-5">
                About Us
              </h1>
              <p className="lead  mb-0">
                Jassa is a responsive ecommerce website built with React , Redux
                Toolkit , Axios , Djnago , Stripe , Postgres , and Axios
              </p>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container pt-5">
          <div className="section rounded-4 p-4  mx-5 mx-md-0 px-5 col-8 col-lg-12 d-flex flex-row  justify-content-evenly align-items-end">
            <div className="  mx-md-0 d-flex flex-column ">
              <div className="mx-2 width-100">
                <h2 style={{ color: "#534444" }} className="fw-bold">
                  Our Git Hub Repository
                </h2>
                <p className=" font-italic text-danger  mb-4">
                  Check Out Our Source Code!
                </p>
              </div>
              <div className="mb-3 me-4 mt-3 d-flex flex-column">
                <a
                  href="https://github.com/rAboegila/Ecommerce-React"
                  className="btn link-button text-light   mb-3 rounded-pill shadow-sm"
                >
                  Front End
                </a>
                <a
                  href="https://github.com/omaramgad1/E-commerce-Django-App.git"
                  className="btn link-button text-light  mb-2  rounded-pill shadow-sm"
                >
                  Back End
                </a>
              </div>
            </div>
            <div className="hide d-flex flex-column">
              <i
                id="github"
                style={{ fontSize: "10rem" }}
                className="bi bi-github"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 mt-0">
        <div className=" px-5 section  rounded-4 container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 style={{ color: "#534444" }} className="fs-3 fw-bold">
                Our Team
              </h2>
              <p className="font-italic fs-5 text-muted">
                Looking Forward To Hear From You 😉
              </p>
            </div>
          </div>
          <div className="row text-center">
            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="rounded shadow-sm teamCard py-5 px-4">
                <h5 className="fs-4 mb-0">Rawan Aboegila</h5>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="fs-4  list-inline-item">
                    <a href="https://github.com/rAboegila">
                      <GithubOutlined />
                    </a>
                  </li>
                  <li className="fs-4  list-inline-item">
                    <a href="https://www.linkedin.com/in/rawan-aboegila">
                      <LinkedinOutlined />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}
            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className=" teamCard rounded shadow-sm py-5 px-4">
                <h5 className="fs-4 mb-0">Ahmed Samy</h5>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="fs-4  list-inline-item">
                    <a href="https://github.com/AhmeSamyyx">
                      <GithubOutlined />
                    </a>
                  </li>
                  <li className="fs-4  list-inline-item">
                    <a href="https://www.linkedin.com/in/ahmedsamyy/">
                      <LinkedinOutlined />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}
            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className=" teamCard rounded shadow-sm py-5 px-4">
                <h5 className="fs-4 mb-0">Omar Amgad</h5>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="fs-4  list-inline-item">
                    <a href="https://github.com/omaramgad1">
                      <GithubOutlined />
                    </a>
                  </li>
                  <li className="fs-4  list-inline-item">
                    <a href="https://www.linkedin.com/in/omar-amgad89/">
                      <LinkedinOutlined />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}
            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className=" teamCard rounded shadow-sm py-5 px-4">
                <h5 className="fs-4 mb-0">Mohamed Osama</h5>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="fs-4  list-inline-item">
                    <a href="https://github.com/MohamedOsama298">
                      <GithubOutlined />
                    </a>
                  </li>
                  <li className="fs-4  list-inline-item">
                    <a href="https://www.linkedin.com/in/mohamed-osama-amasha/">
                      <LinkedinOutlined />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}
          </div>
        </div>
      </div>
    </div>
  );
}
