import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../Lib/axios";
import { login } from "../../Features/auth/authSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setIsAdmin } from '../../Lib/IsAdmin';
import axios from "axios";
import {notification } from "antd";




function Login() {

  const [antApi, contextHolder] = notification.useNotification();
  const openNotification = (Msg) => {
    antApi.info({
      message: Msg,
      placement: 'top',
    });
  };


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, user, error } = useSelector(
    (state) => state.auth || {}
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://ecommerce-django-ct3k.onrender.com/account/login/", {
        email: email,
        password: password,
      });

      console.log("login response", response);

      if (!response.data.token) {
        console.log(response);
      }

      if(response.data.is_admin){
      localStorage.setItem("token_admin", response.data.token);
      dispatch(setIsAdmin(response.data.is_admin));
      navigate("/admin")
      }else {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        console.log(response.data);
        console.log("Login Successfully");
        dispatch(login()); // Dispatch the login action
        navigate("/");

      }
      console.log(response.data.is_admin);
    } catch (error) {
      console.error(error);
      openNotification('Email or password is invalid')
    }
  };

  return (

    <div className='container mt-5 mb-5'>
      {contextHolder}
       <div className='text-center'>SIGN UP</div>
       <Form onSubmit={handleLogin}>
    
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" value={email} placeholder="email" onChange={(event) => setEmail(event.target.value)} required/>
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>
    
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} required/>
         </Form.Group>
         <Button variant="primary" type="submit">
           Log in
         </Button>
       </Form>
     </div>
  );
}

export default Login;
