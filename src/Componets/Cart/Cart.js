import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Drawer, Space } from "antd";

import { isOpen, closeCart } from "../../Features/cart/cartSlice";

import CartList from "../CartList/CartList";
export default function Cart() {
  const dispatch = useDispatch();
  const openDrawer = useSelector(isOpen);
  const onClose = () => {
    console.log("closing?", openDrawer);
    dispatch(closeCart());
  };

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
          <Button type="primary" onClick={onClose}>
            CheckOut
          </Button>
        </Space>
      }
    >
      <CartList />
    </Drawer>
  );
}
