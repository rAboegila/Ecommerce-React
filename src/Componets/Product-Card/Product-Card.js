import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Modal, Radio, Space, Error, message, Alert, Button } from "antd";
import { HeartOutlined, HeartFilled, ShopFilled } from "@ant-design/icons";

import api from "../../Lib/axios";

import { addItem, addProduct } from "../../Features/cart/cartSlice";
import { addWishItem } from "../../Features/wishlist/wishlistSlice";
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
  const [errMsg, setErrMsg] = useState("All Good");
  const [disable, setDisable] = useState(false);
  const [err, setError] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const [messageApi, contextHolder] = message.useMessage();
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
  const handleOk = () => {
    if (!disable) {
      setConfirmModalLoading(true);
      api
        .get(
          `/product/${product.id}/inventory/${reverseFormattedColor(
            choosenColor
          )}/${reverseFormattedSize(choosenSize)}/quantity/`
        )
        .then((res) => {
          setConfirmModalLoading(false);

          if (res.data.quantity > 0) {
            product.stock = res.data.quantity;
            product.size = choosenSize;
            product.color = choosenColor;
            const response = addToCart();

            if (response) {
              setModalOpen(false);
              // setInStock(true);
              setError(false);
              setErrMsg("All Good!");
            }
          } else {
            // setInStock(false);
            setErrMsg("We are sorry! Product out of stock :(");
            setConfirmModalLoading(false);

            setError(true);
          }
        })
        .catch((err) => {
          setConfirmModalLoading(false);

          setError(true);
          setErrMsg(err.response.data.error);
        });
      setChoosenColor("");
      setChoosenSize("");
    }
  };
  const handleCancel = () => {
    setChoosenColor("");
    setChoosenSize("");
    setModalOpen(false);
    // setInStock(true);
    setError(false);
    setErrMsg("All Good!");

    setConfirmModalLoading(false);
  };
  const addToCart = () => {
    const itemData = {
      color: reverseFormattedColor(choosenColor),
      size: reverseFormattedSize(choosenSize),
      quantity: 1,
    };
    api
      .post(`/cart/item/create/${product.id}/`, itemData)
      .then((res) => {
        dispatch(addItem(res.data.data));
        setModalOpen(false);
        // setInStock(true);
        setError(false);
        setErrMsg("All Good!");
      })
      .catch((err) => {
        setError(true);
        setErrMsg(err.response.data.error);
      });
  };
  const addToWishList = () => {

    api
      .post(`/wishlist/add_product/${product.id}/`)
      .then((res) => {
        dispatch(addWishItem(product));
        successMsg("Added to your wishlist succesfully");
      })
      .catch((err) => {
        errorMsg(err.response.data.error);
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
    // setInStock(true);
    setError(false);
    setChoosenColor(value);
  };
  const onSizeChange = ({ target: { value } }) => {
    // setInStock(true);
    setError(false);
    setChoosenSize(value);
  };
  return (
    <>
      {contextHolder}

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
          <Link
            key={`${product.id}-${product.name}-wishlist`}
            onClick={addToWishList}
          >
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
          {err && (
            <Alert message="Error" description={errMsg} type="error" showIcon />
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
