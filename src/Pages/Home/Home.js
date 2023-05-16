import React from "react";
// import { useDispatch } from "react-redux";

import api from "../../Lib/api";
import "./Home.css";

// Components
import CategoryCard from "../../Componets/Category-Card/Category-Card";
import HeroCarousel from "../../Componets/Carousel/Carousel";

// //Slicers
// import { addCategories } from "../../Features/category/categorySlice";

export default function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetch_Catgories = async () => {
  //     await api
  //       .get("/products/categories")
  //       .then((res) => {
  //         console.log(res.data);
  //         dispatch(addCategories(res.data));
  //       })
  //       .catch((err) => console.log("error\n", err));
  //   };
  //   fetch_Catgories();
  // });

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
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_01.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                  <a href="#" className="h2 text-decoration-none text-dark">
                    Lorem Ipsum
                  </a>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_02.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                  <a href="#" className="h2 text-decoration-none text-dark">
                    Lorem Ipsum
                  </a>
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
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/05/feature_prod_03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
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
                  <a href="#" className="h2 text-decoration-none text-dark">
                    Lorem Ipsum
                  </a>
                  <p className="card-text">
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                    Lorem Ipsum.
                  </p>
                  <p className="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
