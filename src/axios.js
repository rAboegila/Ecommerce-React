import axios from "axios";

const baseURL = 'http://127.0.0.1:9001/';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      Authorization: localStorage.getItem('access_token')
        ? 'Bearer '+ localStorage.getItem('access_token')
        : null,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });


// axiosInstance.interceptors.response.use((response)=>{
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
//             const refreshToken = localStorage.getItem('refresh_token');

//             if(refreshToken){
//                 const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

//                 const now = Math.ceil(Date.now()/ 1000);
//                 console.log(tokenParts.exp);

//                 if(tokenParts.exp > now) {
//                     return axiosInstance
//                     .post('jwt/refresh', {refresh: refreshToken})
//                     .then((response)=>{
//                         localStorage.setItem('access_token', response.data.access);
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
// )




export default axiosInstance;