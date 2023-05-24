import { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import api from "../../Lib/axios";
import { login } from "../../Features/auth/authSlice";
import {setProfile} from "../../Features/user/userSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { setIsAdmin } from "../../Lib/IsAdmin";
import axios from "axios";
import { notification } from "antd";
import {LoadingOutlined } from "@ant-design/icons"
import { InfoCircleFilled} from '@ant-design/icons'


function Login() {
  const [antApi, contextHolder] = notification.useNotification();
  const errorNotification =  (Msg) => {
    antApi.info({
      message: Msg,
      placement:'top',
      style:{color:'#ec6060'},
      icon:(<InfoCircleFilled/>)
    });
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [submiting,setSubmitting]=useState(false);


  const handleLogin = async (event) => {
    setSubmitting(true);
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ecommerce-django-ct3k.onrender.com/account/login/",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.is_admin) {
        localStorage.setItem("token_admin", response.data.token);
        dispatch(setIsAdmin(response.data.is_admin));
        navigate("/admin");
      } else {
        localStorage.setItem("token", response.data.token);
        api.get('/account/profile/')
        .then((response)=>
        {
          dispatch(setProfile(response.data));
        })
        .catch((err)=>{});
        dispatch(login());
        navigate("/");
      }
    } catch (error) {
      errorNotification("Email or password is invalid");
    }
    setSubmitting(false);
  };

  return (
    <div className="container mt-5 mb-5">
      {contextHolder}
      <div className="text-center">SIGN UP</div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {
          (submiting && <LoadingOutlined />) || (!submiting && "Log In")
          }
        </Button>
      </Form>
    </div>
  );
}

export default Login;
