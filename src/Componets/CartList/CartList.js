import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Avatar, List, Button, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import {
  getCartItems,
  incrementItem,
  decrementItem,
} from "../../Features/cart/cartSlice";
export default function CartList() {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const addDisable = (item) => {};
  const removeDisable = (item) => {};
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
