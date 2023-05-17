import { Outlet, Route, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";


function UserPrivate({ component: Component, ...rest }){
    const navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) || false;
  
    console.log(isLoggedIn);
  
    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     navigate("/login");
    //   }
    // }, [isLoggedIn, navigate]);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default UserPrivate;