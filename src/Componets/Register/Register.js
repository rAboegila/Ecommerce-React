import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { axiosInstance } from '../../axios';
import axiosInstance from '../../axios';
import { useState } from 'react';
import { useNavigate } from "react-router";

function Register() {

    let navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
        password: '',
    });


    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e)=>{
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);

        axiosInstance
        .post(`user/register`, {
            email: formData.email,
            user_name: formData.username,
            password: formData.password,
        })
        .then((res)=>{
            navigate('/login');
            console.log(res);
            console.log(res.data);
        });
    };


  return (
    <>
    <div className='container mt-5 mb-5'>
        <div className='text-center'>SIGN UP</div>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default Register;