import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../Lib/axios";
import { login } from "../../Features/auth/authSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setIsAdmin } from '../../Lib/IsAdmin';

function Login() {
  const navigate = useNavigate();

  // ONLOGOUTBUTTON
  //     const dispatch = useDispatch();

  //   const onLogOut = ()=>{
  //     localStorage.removeItem("token");
  //     dispatch(logout())
  //     navigate("/login");
  // }

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
      const response = await api.post("/account/login/", {
        email: email,
        password: password,
      });

      console.log("login response", response);

      if (!response.data.data.token) {
        console.log(response.data);
      }

      if(response.data.data.is_admin){
      localStorage.setItem("token_admin", response.data.data.token);
      dispatch(setIsAdmin(response.data.data.is_admin));
      navigate("/admin")
      }else {
        localStorage.setItem("token", response.data.data.token);
        console.log(response.data.data.token);
        console.log(response.data.data);
        console.log("Login Successfully");
        dispatch(login()); // Dispatch the login action
        navigate("/");

      }
      console.log(response.data.data.is_admin);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container mt-5 mb-5'>
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
           Submit
         </Button>
       </Form>
     </div>
  );
}


// <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? "Logging in..." : "Login"}
//       </button>
//       {error && <p>{error}</p>}
//     </form>
export default Login;
