// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// // import { axiosInstance } from '../../axios';
// import axiosInstance from '../../axios';
// import { useState } from 'react';
// import { useNavigate } from "react-router";

// function Login() {

//     let navigate = useNavigate();
//     const initialFormData = Object.freeze({
//         email: '',
//         password: '',
//     });


//     const [formData, setFormData] = useState(initialFormData);

//     // const handleChange = (e)=>{
//     //     setFormData({
//     //         ...formData,
//     //         [e.target.name]: e.target.value.trim(),
//     //     });
//     // };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//       };

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData((prevState) => ({
//     //       ...prevState,
//     //       [name]: value.trim(),
//     //     }));
//     //   };


//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log(formData);

//         axiosInstance
//         .post(`token/`, {
//             email: formData.email,
//             password: formData.password,
//         })
//         .then((res)=>{
//             localStorage.setItem('access_token', res.data.access);
//             localStorage.setItem('refresh_token', res.data.refresh);
//             axiosInstance.defaults.headers['Authorization'] = 
//                 'JWT ' + localStorage.getItem('access_token');

//             navigate('/');
//             // console.log(res);
//             // console.log(res.data);
//         });
//     };


//   return (
//     <div className='container mt-5 mb-5'>
//         <div className='text-center'>LOGIN</div>
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name={formData.email} placeholder="Enter email" onChange={handleChange} />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" name={formData.password} onChange={handleChange} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     </div>
//   );
// }

// export default Login;




// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axiosInstance from '../../axios';
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// function Login() {

//   let navigate = useNavigate();
//   const initialFormData = Object.freeze({
//     email: '',
//     password: '',
//   });

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value.trim(),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     axiosInstance
//       .post('token/', {
//         email: formData.email,
//         password: formData.password,
//       })
//       .then((res) => {
//         localStorage.setItem('access_token', res.data.access);
//         localStorage.setItem('refresh_token', res.data.refresh);
//         axiosInstance.defaults.headers['Authorization'] =
//           'JWT ' + localStorage.getItem('access_token');

//         navigate('/');
//       });
//   };

//   return (
//     <div className='container mt-5 mb-5'>
//       <div className='text-center'>LOGIN</div>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" onChange={handleChange} />
//         </Form.Group>

//         <Button variant="primary" type="submit" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default Login;




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
      .post(`token/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        navigate('/');
        console.log(res);
        console.log(res.data);
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