import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../Lib/axios";

import { Avatar, List, Button, Tooltip, Spin, Space } from "antd";
import {
  PlusCircleFilled,
  MinusCircleFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { getToken } from "../../Features/user/userSlice";
import {
  getCartItems,
  incrementItem,
  decrementItem,
  fetchCartItems,
  getLoading,
  removeItem,
  getPrice,
} from "../../Features/cart/cartSlice";

import {
  formatSize,
  formatColor,
  reverseFormattedColor,
  reverseFormattedSize,
} from "../../Lib/StringFormat";

export default function CartList() {
  const [isLoading, setLoading] = useState(useSelector(getLoading));
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const addDisable = (item) => {};
  const removeDisable = (item) => {};
  const token = useSelector(getToken);
  const totalPrice = useSelector(getPrice);
  useEffect(() => {
    const data = dispatch(fetchCartItems());
  }, []);
  const removeFromCart = (item) => {
    console.log("atempt to remove from cart>>", item);

    api
      .delete(`/cart/item/remove/${item.id}/`)
      .then((res) => {
        console.log("add to cart succesfull!\nres >>> ", res);
        const respo = dispatch(removeItem(item));
        console.log(respo);
      })
      .catch((err) => {
        console.log("add to cart failed!\n err >>> ", err);
      });
  };
  return (
    <>
      {isLoading ? (
        <div className="overlay">
          <Spin className="loader" tip="Loading" size="large"></Spin>
        </div>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Tooltip title="remove">
                    <Button
                      type="text"
                      className="text-danger"
                      shape="circle"
                      size="large"
                      icon={<MinusCircleFilled />}
                      onClick={() => dispatch(decrementItem(index))}
                    />
                  </Tooltip>,
                  <span>{item.quantity}</span>,
                  <Tooltip title="add">
                    <Button
                      type="text"
                      className="text-success"
                      shape="circle"
                      icon={<PlusCircleFilled />}
                      size="large"
                      onClick={() => dispatch(incrementItem(index))}
                    />
                  </Tooltip>,
                  <Tooltip title="delete">
                    <Button
                      type="text"
                      className="text-primary"
                      shape="circle"
                      icon={<DeleteFilled />}
                      size="large"
                      onClick={() => removeFromCart(item)}
                    />
                  </Tooltip>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.product_img} />}
                  title={item.product_name}
                  description={`${formatColor(item.color)} , ${formatSize(
                    item.size
                  )}`}
                />
              </List.Item>
            )}
          />
          <Space>
            <h5 className="fw-bold">Total Price:</h5>
            <h5 className="fw-normal">{totalPrice} &dollar;</h5>
          </Space>
        </>
      )}
    </>
  );
}
