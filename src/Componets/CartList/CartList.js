import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Avatar, List, Button, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { getToken } from "../../Features/user/userSlice";
import {
  getCartItems,
  incrementItem,
  decrementItem,
  fetchCartItems,
} from "../../Features/cart/cartSlice";
import { useEffect } from "react";

export default function CartList() {
  // const cartItems = useSelector(getCartItems);
  const [cartItems, setCartItems] = useState();
  const dispatch = useDispatch();
  const addDisable = (item) => {};
  const removeDisable = (item) => {};
  const token = useSelector(getToken);
  useEffect(() => {
    const data = dispatch(fetchCartItems(token));
    setCartItems(data);
  });

  /*
  {
    "id": 1,
    "user": "user",
    "cartItems": [
        {
            "id": 1,
            "product": 1,
            "product_name": "EMERY ROSE Batwing Sleeve Dress",
            "quantity": 2,
            "size": "S",
            "color": "red",
            "price": "140.00",
            "product_img": "media/products/EMERY_ROSE_Batwing_Sleeve_Dress_ivooll",
            "subtotal": 280.0,
            "cart": "1"
        }
    ],
    "total": 280.0
}
  */
  return (
    <List
      itemLayout="horizontal"
      dataSource={cartItems}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <Tooltip title="search">
              <Button
                type="primary"
                className="text-bg-danger"
                shape="round"
                size="small"
                icon={<MinusOutlined />}
                onClick={() => dispatch(decrementItem(index))}
              />
            </Tooltip>,
            <span>{item.quantity}</span>,
            <Tooltip title="search">
              <Button
                type="primary"
                className="text-bg-success"
                shape="round"
                icon={<PlusOutlined />}
                size="small"
                onClick={() => dispatch(incrementItem(index))}
              />
            </Tooltip>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
              />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
}
