// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { loginUser } from '../redux/authActions';
// import { loginUser } from './authActions';
// import { useNavigate } from "react-router";
// import api from '../../axios';
// import { login } from './authSlice';

// function Login() {
// const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   // const { isLoading, error } = useSelector((state) => state.auth);
//   const { isLoading, isAuthenticated, user, error } = useSelector((state) => state.auth || {});
//   const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//       });

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//         const response = await api.post(
//           `/account/login/`,
//           {
//          email: email,
//          password: password,
//          }
//         )

//         if (!response.data.tokens) {
//         //   toast.error("Invalid username or password", {
//         //     position: toast.POSITION.TOP_RIGHT,
//         //   }
//           console.log(response.data)
//         };

//         localStorage.setItem("token", response.data.tokens.access);
//         // toast.success("Login Succsefully", {
//         //   position: toast.POSITION.TOP_RIGHT,
//         // });
//         console.log("Login Succsefully");
//         navigate("/");
//         dispatch(login());
//       } catch (error) {
//         console.error(error);
//       }
//   };

//   return (
//     <form onSubmit={handleLogin}>
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
//       <button type="submit" disabled={isLoading }>
//     {isLoading ? 'Logging in...' : 'Login'}
//   </button>
//   {error && <p>{error}</p>}
// </form>
// );
// }

// export default Login;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../Lib/axios";
import { login } from "../../Features/auth/authSlice";

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

      if (!response.data.token) {
        console.log(response.data);
      }

      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      console.log("Login Successfully");
      navigate("/");
      dispatch(login()); // Dispatch the login action
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
