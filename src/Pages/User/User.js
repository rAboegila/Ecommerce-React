import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Outlet} from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./User.css";

export default function User() {
  const items = [
    {
      label: "Track Orders",
      key: "orders",
      icon: (
        <NavLink to="">
          <ShoppingCartOutlined />
        </NavLink>
      ),
    },
    {
      label: "Profile",
      key: "profile",
      icon: (
        <NavLink to="details">
          <UserOutlined />
        </NavLink>
      ),
    },
  ];

  const [current, setCurrent] = useState("orders");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(()=>{
    if(window.location.href.split('/')[4] === "details"){
      setCurrent("profile");
    }
    
  },[])
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Outlet/>
    </>
  );
}
