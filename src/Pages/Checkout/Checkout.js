import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import api from "../../Lib/api";

export default function Checkout() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("");
  //   function changeMethod(value){
  //     // setMethod(value);
  //     console.log(value.value);
  //   }
  return (
    <>
      <Formik
        initialValues={{ shipping_address: "", payment_method: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.shipping_address) {
            errors.shipping_address = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const reqBody = {
            shipping_address: "sddsds",
            payment_method: "credit",
          };
          try {
            if (method == "cod") {
              await api.post("order/checkout/", reqBody);
              navigate("/success");
            } else {
              const token = localStorage.getItem("token");
              const res = await fetch(
                "https://ecommerce-django-ct3k.onrender.com/order/checkout/",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(reqBody),
                }
              );
              const body = await res.json();
              console.log(body.url);
              window.location.href = body.url;
            }
          } catch (err) {}
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="m-3">
            <label htmlFor="shipping_address" className="m-3">
              Delivery Address
            </label>
            <input
              type="text"
              name="shipping_address"
              id="shipping_address"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shipping_address}
            />
            {errors.shipping_address &&
            touched.shipping_address &&
            errors.shipping_address ? (
              <div className="error">{errors.shipping_address}</div>
            ) : null}
            <br />
            <label htmlFor="payment_method">Payment Method</label>
            <select
              name="payment_method"
              className="form-select"
              id="payment_method"
              onChange={(e) => {
                setMethod(e.target.value);
              }}
            >
              <option value="credit">Credit Card</option>
              <option value="cod">Cash On Delivery</option>
            </select>
            <br />
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              Checkout
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
