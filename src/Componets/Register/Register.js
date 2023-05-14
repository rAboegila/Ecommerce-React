import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../axios';
import { useState } from 'react';
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
//   const [image, setImage] = useState();
//   let profileimage = null;
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    phone: '',
    // profileImgUrl: null,
  });
  
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//     // console.log(e.target.files[0]);
//   };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("email", formData.email);
    formDataWithImage.append("username", formData.username);
    formDataWithImage.append("password", formData.password);
    formDataWithImage.append("password2", formData.password2);
    formDataWithImage.append("first_name", formData.first_name);
    formDataWithImage.append("last_name", formData.last_name);
    // formDataWithImage.append("profileImgUrl", image);
    formDataWithImage.append("phone", formData.phone);
    formDataWithImage.append("date_of_birth", formData.date_of_birth);


    console.log(formDataWithImage.values);
    console.log(formData);

    // axiosInstance
    //   .post(`account/register/`, formData)
    //   .then((res) => {
    //     // navigate('/login');
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch((err)=> console.log(err.response))
    //   ;

    axiosInstance
    .post(`account/register/`, formDataWithImage)
    .then((res) => {
        navigate('/login');
      console.log(res);
      console.log(res.data);
      // Do something with the response if successful
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(err);
      }
      // Do something with the error
    });
  };

  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='text-center'>SIGN UP</div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicUserFirst">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="first_name" placeholder="Enter Firstname" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserLast">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="last_name" placeholder="Enter Lastname" onChange={handleChange} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter Username" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Password Again</Form.Label>
            <Form.Control type="password" name="password2" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="date_of_birth" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          {/* <Form.Group controlId="formFile" className="mb-3">
                 <Form.Label>Default file input example</Form.Label>
                 <Form.Control type="file" name="profileImgUrl" onChange={handleImageChange} />
                 </Form.Group> */}
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Register;