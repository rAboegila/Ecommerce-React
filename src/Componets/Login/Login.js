import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../axios';
import { useState } from 'react';
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
    .post(`account/login/`, {
      email: formData.email,
      password: formData.password,
    })
    .then((res) => {
        navigate('/')
      if (res && res.data) {
        console.log(res);
        console.log(res.data);
      } else {
        console.log('Response or response data is undefined');
      }
    })
    .catch((err) => {
      console.log(err.response.data.error.errors[0]);
      // Do something with the error
    });
  };

 

  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='text-center'>SIGN UP</div>
        <Form>

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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;