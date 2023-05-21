// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import api from "../../Lib/axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";

// function Register() {
//   const navigate = useNavigate();
//     // const [profileImgUrl, setImage] = useState();
//   //   let profileimage = null;
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password: "",
//     password2: "",
//     first_name: "",
//     last_name: "",
//     date_of_birth: "",
//     phone: "",
//     // profileImgUrl: null,
//   });

//     // const handleImageChange = (e) => {
//     //   setImage(e.target.files[0]);
//     //   console.log(e.target.files[0]);
//     //   console.log(profileImgUrl);
//     // };

//     // const fileSelectHandler = e => {
//     //   const param = e.target.files[0];
//     //   let reader = new FileReader();
//     //   reader.readAsDataURL(param);
  
//     //   setImage({
//     //     profileImgUrl: reader.result
//     //   });
//     //   console.log(reader);
//     // };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value.trim(),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formDataWithImage = new FormData();
//     formDataWithImage.append("email", formData.email);
//     formDataWithImage.append("username", formData.username);
//     formDataWithImage.append("password", formData.password);
//     formDataWithImage.append("password2", formData.password2);
//     formDataWithImage.append("first_name", formData.first_name);
//     formDataWithImage.append("last_name", formData.last_name);
//     // formDataWithImage.append("profileImgUrl", profileImgUrl, profileImgUrl.name);
//     formDataWithImage.append("phone", formData.phone);
//     formDataWithImage.append("date_of_birth", formData.date_of_birth);

//     console.log(formDataWithImage.values);
//     console.log(formDataWithImage.get("email"));
//     console.log(formData);

    
//       axios.post(`https://ecommerce-django-ct3k.onrender.com/account/register/`, formDataWithImage, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         }
//       })
//       .then((res) => {
//         navigate("/login");
//         console.log(res);
//         console.log(res);
//         // Do something with the response if successful
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err.response);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else {
//           console.log(err);
//         }
//         // Do something with the error
//       });
//   };

//   return (
//     <>
//       <div className="container mt-5 mb-5">
//         <div className="text-center">SIGN UP</div>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicUserFirst">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="first_name"
//               placeholder="Enter Firstname"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicUserLast">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="last_name"
//               placeholder="Enter Lastname"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicUser">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               placeholder="Enter Username"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               onChange={handleChange}
//             />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword2">
//             <Form.Label>Password Again</Form.Label>
//             <Form.Control
//               type="password"
//               name="password2"
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPhone">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control
//               type="text"
//               name="phone"
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicDate">
//             <Form.Label>Date of Birth</Form.Label>
//             <Form.Control
//               type="date"
//               name="date_of_birth"
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           {/* <Form.Group controlId="formFile" className="mb-3">
//                  <Form.Label>Default file input example</Form.Label>
//                  <Form.Control type="file" name="profileImgUrl" onChange={(handleImageChange)} />
//                  </Form.Group> */}
//           <Button variant="primary" type="submit" onClick={handleSubmit}>
//             Register
//           </Button>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default Register;










import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import api from "../../Lib/axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";


function Register() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone: "",
    // imageUrl: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    username: Yup.string().required("Required") ,
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

  const onSubmit = ({ email, username, password, password2, first_name, last_name, date_of_birth, phone, imageUrl }) => {
    const formDataWithImage= new FormData();
    formDataWithImage.append("email", email);
    formDataWithImage.append("username", username);
    formDataWithImage.append("password", password);
    formDataWithImage.append("password2", password2);
    formDataWithImage.append("first_name", first_name);
    formDataWithImage.append("last_name", last_name);
    formDataWithImage.append("phone", phone);
    formDataWithImage.append("date_of_birth", date_of_birth);
    // formDataWithImage.append("imageUrl", imageUrl);

    axios.post(`https://ecommerce-django-ct3k.onrender.com/account/register/`, formDataWithImage, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then((res) => {
        navigate("/login");
        console.log(res);
        // setImage(res.imageUrl)
        // Do something with the response if successful
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
        // Do something with the error
      });
  };

  // const [image, setImage] = useState();

  return (
    <>
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
                <label htmlFor="first_name" className="form-label">First Name</label>
                <Field
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="Enter Firstname"
                />
                <ErrorMessage name="first_name" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name</label>
                <Field
                  type="text"
                  name="last_name"
                  className="form-control"
                  placeholder="Enter Lastname"
                />
                <ErrorMessage name="last_name" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="password2" className="form-label">Password Again</label>
                <Field
                  type="password"
                  name="password2"
                  className="form-control"
                  placeholder="Password"
                />
                <ErrorMessage name="password2" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                />
                <ErrorMessage name="phone" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                <Field
                  type="date"
                  name="date_of_birth"
                  className="form-control"
                  placeholder="Enter date of birth"
                />
                <ErrorMessage name="date_of_birth" component="div" className="text-danger" />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="image" className="form-label">Profile Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(event) => {
                    setImage("imageUrl", event.currentTarget.files[0]);
                  }}
                />
                </div> */}

              <Button variant="primary"type="submit" >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Register;