import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Modal, Radio, Space, Error, Alert, Button } from "antd";
import { HeartOutlined, HeartFilled, ShopFilled } from "@ant-design/icons";

import api from "../../Lib/axios";

import { addItem, addProduct } from "../../Features/cart/cartSlice";

import {
  formatSize,
  formatColor,
  reverseFormattedColor,
  reverseFormattedSize,
} from "../../Lib/StringFormat";

import "./Product-Card.css";

export default function ProductCard({ product, isLoading }) {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [choosenSize, setChoosenSize] = useState("");
  const [choosenColor, setChoosenColor] = useState("");
  const [confirmModalLoading, setConfirmModalLoading] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [disable, setDisable] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  // function formatMetadata(color, size) {
  //   return { color: formatColor(color), size: formatSize(size) };
  // }
  // function unformatMetadata(color, size) {
  //   return {
  //     color: reverseFormattedColor(color),
  //     size: reverseFormattedSize(size),
  //   };
  // }
  const handleOk = () => {
    setConfirmModalLoading(true);
    console.log("current size", choosenSize, "\ncurrent color", choosenColor);
    const res = api
      .get(
        `/product/${product.id}/inventory/${choosenColor}/${choosenSize}/quantity/`
      )
      .then((res) => {
        setConfirmModalLoading(false);

        if (res.data.quantity > 0) {
          product.stock = res.data.quantity;
          product.size = choosenSize;
          product.color = choosenColor;
          addToCart();
          setModalOpen(false);
          setInStock(true);
        } else {
          setInStock(false);
        }
      });
    setChoosenColor("");
    setChoosenSize("");
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setChoosenColor("");
    setChoosenSize("");
    setModalOpen(false);
    setInStock(true);
  };
  const addToCart = () => {
    console.log("atempt to add to cart>>", product);
    const itemData = {
      color: reverseFormattedColor(choosenColor),
      size: reverseFormattedSize(choosenSize),
      quantity: 1,
    };
    api
      .post(`/cart/item/create/${product.id}/`, itemData)
      .then((res) => {
        console.log("add to cart succesfull!\nres >>> ", res);
        dispatch(addItem(product));
      })
      .catch((err) => {
        console.log("add to cart failed!\n err >>> ", err);
      });
  };

  useEffect(() => {
    if (modalOpen) {
      if (choosenColor === "" && choosenSize === "") {
        setDisable(true);
      } else if (choosenColor !== "" && choosenSize !== "") setDisable(false);
    }
  });

  useEffect(() => {
    api.get(`/product/${product.id}/inventory/colors/`).then((res) => {
      const preFormation = res.data.colors;

      setColors(preFormation.map((color) => formatColor(color)));
    });
    api.get(`/product/${product.id}/inventory/sizes/`).then((res) => {
      {
        const preFormation = res.data.sizes;
        setSizes(preFormation.map((size) => formatSize(size)));
      }
    });
  }, []);

  const onColorChange = ({ target: { value } }) => {
    console.log("Change Color");
    setInStock(true);
    console.log("color choosen", value);
    setChoosenColor(value);
  };
  const onSizeChange = ({ target: { value } }) => {
    setInStock(true);
    console.log("size choosen", value);
    setChoosenSize(value);
  };
  return (
    <>
      <Card
        key={product.id + product.name}
        hoverable
        loading={isLoading}
        style={{
          maxHeight: 480,
          minHeight: 480,
          padding: 10,
        }}
        cover={
          <img
            alt="product-Image"
            src={product.imageUrl}
            style={{ maxHeight: 300, minHeight: 300, padding: 10 }}
          />
        }
        actions={[
          <Link key={`${product.id}-${product.name}-wishlist`} onClick={{}}>
            <HeartOutlined />
          </Link>,
          <Link key={`${product.id}-${product.name}-buy`} onClick={showModal}>
            <ShopFilled />
          </Link>,
        ]}
      >
        <Meta title={product.name} description={product.price} />
      </Card>
      <Modal
        title="Choose Size and Color"
        open={modalOpen}
        onOk={handleOk}
        confirmLoading={confirmModalLoading}
        onCancel={handleCancel}
        key={`${product.id}-${product.name}-wishlist`}
        okButtonProps={{
          disabled: disable,
        }}
      >
        <Space direction="vertical" size="middle">
          {!inStock && (
            <Alert
              message="Error"
              description="We are sorry! Product out of stock :("
              type="error"
              showIcon
            />
          )}
          <Radio.Group
            options={colors}
            onChange={onColorChange}
            value={choosenColor}
            optionType="button"
            name="colors"
            size="small"
          />
          <Radio.Group
            options={sizes}
            onChange={onSizeChange}
            value={choosenSize}
            optionType="button"
            name="sizes"
            size="small"
          />
        </Space>
      </Modal>
    </>
  );
}
