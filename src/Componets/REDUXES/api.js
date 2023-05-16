import axios from 'axios';
import { logoutUser } from './authActions';
import {getLoggedIn} from './authSlice';
// import { useSelector } from 'react-redux';
import { clippingParents } from '@popperjs/core';
import store from './store';


const api = axios.create({
  baseURL: 'http://127.0.0.1:9000/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.interceptors.response.use((response)=>{
//     return response
// },
//     async function (error) {
//         const originalRequest = error.config;

//         if (typeof error.response === 'undefined'){
//             alert(
//                 'A server/network error occured'
//             );
//             return Promise.reject(error);
//         }

//         if (error.response.status === 401 && originalRequest.url === baseURL + 'jwt/refresh/'){
//             window.location.href = '/login/';
//             return Promise.reject(error);
//         }
        
//         if (error.response.data.code === 'token_not_found' && error.response.status === 401 && error.response.statusText === 'Unauthorized'){
//             const refresh_token = localStorage.getItem('refresh_token');

//             if(refresh_token){
//                 const tokenParts = JSON.parse(atob(refresh_token.split('.')[1]));

//                 const now = Math.ceil(Date.now()/ 1000);
//                 console.log(tokenParts.exp);

//                 if(tokenParts.exp > now) {
//                     return axiosInstance
//                     .post('jwt/refresh/', {refresh: refresh_token})
//                     .then((response)=>{
//                         localStorage.setItem('token', response.data.access);
//                         localStorage.setItem('refresh_token', response.data.refresh);

//                         axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
//                         originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;

//                         return axiosInstance(originalRequest);
//                     })
//                     .catch((err)=>{
//                         console.log(err);
//                     });
//                 } else {
//                     console.log('Refresh Token is Expired', tokenParts.exp, now);
//                     window.location.href='/login/';
//                 }
//             } else {
//                 console.log('Refresh Token Not Available');
//                 window.location.href = '/login/';
//             }
//         }

//     }


export default api;
