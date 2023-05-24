import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import {LoadingOutlined } from "@ant-design/icons"
import {CheckCircleTwoTone , InfoCircleFilled} from '@ant-design/icons'

function Register() {

  const [antApi, contextHolder] = notification.useNotification();
  const successNotification =  (Msg) => {
    antApi.info({
      message: Msg,
      placement:'top',
      icon:(<CheckCircleTwoTone twoToneColor="#52c41a" />),
      style:{backgroundColor:'#43b47f'}
    });
  };

  const errorNotification =  (Msg) => {
    antApi.info({
      message: Msg,
      placement:'top',
      style:{color:'#ec6060'},
      icon:(<InfoCircleFilled/>)
    });
  };

  const navigate = useNavigate();
  const [submiting, setSubmitting] = useState(false);

  const [profileImgUrl, setImage] = useState(null);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])/,
        "Password must contain at least one letter and one number"
      )
      .required("Password is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    date_of_birth: Yup.date().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const onSubmit = ({
    email,
    username,
    password,
    password2,
    first_name,
    last_name,
    date_of_birth,
    phone,
  }) => {
    setSubmitting(true);
    const formDataWithImage = new FormData();
    formDataWithImage.append("email", email);
    formDataWithImage.append("username", username);
    formDataWithImage.append("password", password);
    formDataWithImage.append("password2", password2);
    formDataWithImage.append("first_name", first_name);
    formDataWithImage.append("last_name", last_name);
    formDataWithImage.append("phone", phone);
    formDataWithImage.append("date_of_birth", date_of_birth);
    if(profileImgUrl){
      formDataWithImage.append("profileImgUrl", profileImgUrl);
    }

    axios
      .post(
        `https://ecommerce-django-ct3k.onrender.com/account/register/`,
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        successNotification("Successfully Registered")
        setSubmitting(false);
        setTimeout(()=>navigate("/login"),3000);
      })
      .catch((err) => {
        setSubmitting(false);
        errorNotification("Error registering email address or username is not available");
      });
  };

  return (
    <>
    {contextHolder}
      <div className="container mt-5 mb-5">
        <div className="text-center">SIGN UP</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <Field
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="Enter Firstname"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">
                  Last Name
                </label>
                <Field
                  type="text"
                  name="last_name"
                  className="form-control"
                  placeholder="Enter Lastname"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password2" className="form-label">
                  Password Again
                </label>
                <Field
                  type="password"
                  name="password2"
                  className="form-control"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password2"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date_of_birth" className="form-label">
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="date_of_birth"
                  className="form-control"
                  placeholder="Enter date of birth"
                />
                <ErrorMessage
                  name="date_of_birth"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                />
              </div>

              <Button variant="primary" type="submit">
                {(submiting && <LoadingOutlined />) ||
                  (!submiting && "Register")}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Register;
