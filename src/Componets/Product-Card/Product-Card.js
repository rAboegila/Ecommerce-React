import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import { HeartOutlined, HeartFilled, ShopFilled } from "@ant-design/icons";

import { addItem } from "../../Features/cart/cartSlice";

import "./Product-Card.css";

export default function ProductCard({ product, isLoading }) {
  const { Meta } = Card;
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      loading={isLoading}
      style={{
        maxHeight: 480,
        minHeight: 480,
        padding: 10,
      }}
      cover={
        <img
          alt="example"
          src={product.image}
          style={{ maxHeight: 300, minHeight: 300, padding: 10 }}
        />
      }
      actions={[
        <Link onClick={{}}>
          <HeartOutlined key="wishlist" />
        </Link>,
        <Link onClick={() => dispatch(addItem(product))}>
          <ShopFilled key="buy" />
        </Link>,
      ]}
    >
      <Meta title={product.title} description={product.price} />
    </Card>
  );
}
