import React, { useState, useEffect} from "react";
import axiosInstance from "../../Lib/axios";
import { useNavigate } from "react-router";
import Link from "antd/es/typography/Link";
import axios from "axios";

function Logout(){

const navigate = useNavigate();

useEffect(()=>{
    const response = axios.post('https://ecommerce-django-ct3k.onrender.com/user/logout/blacklist/', {
        refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    navigate('/login');
});
    return <Link to={"/login"}>Logout</Link>
}

export default Logout;