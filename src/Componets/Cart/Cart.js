import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Drawer, Space } from "antd";
import { isOpen, closeCart, getNumItems } from "../../Features/cart/cartSlice";

import CartList from "../CartList/CartList";
export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openDrawer = useSelector(isOpen);
  const disableCheckout = !(useSelector(getNumItems) > 0);
  const onClose = () => {
    dispatch(closeCart());
  };

  const CheckOut = () => {
    dispatch(closeCart());
    navigate("/checkout");
  };
  console.log("disable", disableCheckout);
  return (
    <Drawer
      title="My Cart"
      placement="right"
      width={500}
      onClose={onClose}
      open={openDrawer}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" disabled={disableCheckout} onClick={CheckOut}>
            CheckOut
          </Button>
        </Space>
      }
    >
      <CartList />
    </Drawer>
  );
}
