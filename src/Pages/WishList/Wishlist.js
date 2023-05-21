import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../Lib/axios";

import { Avatar, List, Button, Tooltip, Spin, message } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import {
  getWishItems,
  getLoading,
  removeItem,
  fetchItems,
} from "../../Features/wishlist/wishlistSlice";

import "./Wishlist.css";

export default function WishList() {
  const [isLoading, setLoading] = useState(useSelector(getLoading));
  const wishItems = useSelector(getWishItems);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const data = dispatch(fetchItems());
    console.log(wishItems);
  }, []);

  const removeFromWishList = (item) => {
    console.log("atempt to remove from wishlist>>", item);

    api
      .delete(`/wishlist/delete_product/${item.id}/`)
      .then((res) => {
        console.log("remove from to cart succesfull!\nres >>> ", res);
        const respo = dispatch(removeItem(item));
        successMsg("Item removed successfully");
      })
      .catch((err) => {
        console.log("remove from wishlist failed!\n err >>> ", err);
        errorMsg(err.response.data.error);
      });
  };

  const successMsg = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  const errorMsg = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };
  return (
    <div id="content">
      <h3>My Wishlist</h3>
      {isLoading ? (
        <div className="overlay">
          <Spin className="loader" tip="Loading" size="large"></Spin>
        </div>
      ) : (
        <div className="bg-white p-3" id="list">
          <List
            itemLayout="horizontal"
            dataSource={wishItems}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Tooltip title="delete">
                    <Button
                      type="text"
                      className="text-primary"
                      shape="circle"
                      icon={<DeleteFilled />}
                      size="large"
                      onClick={() => removeFromWishList(item)}
                    />
                  </Tooltip>,
                ]}
                className="shadow p-3 list-item"
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.imageUrl} />}
                  title={item.product_name}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
}
