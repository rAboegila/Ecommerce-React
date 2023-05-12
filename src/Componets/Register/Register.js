// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// // import { axiosInstance } from '../../axios';
// import axiosInstance from '../../axios';
// import { useState } from 'react';
// import { useNavigate } from "react-router";

// function Register() {

//     let navigate = useNavigate();
//     const initialFormData = Object.freeze({
//         email: '',
//         username: '',
//         password: '',
//     });


//     const [formData, updateFormData] = useState(initialFormData);
//     // const [username, setUsername] = useState('');

//     // const handleChange = (e)=>{
//     //     updateFormData({
//     //         ...formData,
//     //         [e.target.name]: e.target.value.trim(),
            
//     //     });
        
//     // };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         updateFormData((prevState) => ({
//           ...prevState,
//           [name]: value.trim(),
//         }));
//       };


//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log(formData);

//         axiosInstance
//         .post(`user/register`, {
//             email: formData.email,
//             user_name: formData.username,
//             password: formData.password,
//         })
//         .then((res)=>{
//             navigate('/login');
//             console.log(res);
//             console.log(res.data);
//         });
//     };


//   return (
//     <>
//     <div className='container mt-5 mb-5'>
//         <div className='text-center'>SIGN UP</div>
//     <Form>
//         <Form.Group className="mb-3" controlId="formBasicUser">
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="text" placeholder="Enter Username" onChange={handleChange} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" onChange={handleChange} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     </div>
//     </>
//   );
// }

// export default Register;



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../axios';
import { useState } from 'react';
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [image, setImage] = useState();
//   let profileimage = null;
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    profileImgUrl: null,
  });
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("email", formData.email);
    formDataWithImage.append("user_name", formData.username);
    formDataWithImage.append("password", formData.password);
    formDataWithImage.append("first_name", formData.first_name);
    formDataWithImage.append("last_name", formData.last_name);
    formDataWithImage.append("profileImgUrl", image);

    console.log(image);
    console.log(formDataWithImage.get('email'));
    console.log(formDataWithImage.get('profileImgUrl'));


    axiosInstance
      .post(`user/register`, formDataWithImage)
      .then((res) => {
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
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="first_name" placeholder="Enter Firstname" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
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
          <Form.Group controlId="formFile" className="mb-3">
                 <Form.Label>Default file input example</Form.Label>
                 <Form.Control type="file" name="profileImgUrl" onChange={handleImageChange} />
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