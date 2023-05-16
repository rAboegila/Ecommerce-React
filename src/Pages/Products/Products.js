import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spin, Card, Row, Col, Breadcrumb, Layout, Menu } from "antd";
// import { HeartOutlined, HeartFilled, ShopFilled } from "@ant-design/icons";

import ProductCard from "../../Componets/Product-Card/Product-Card";
import "./Products.css";

export default function Products() {
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const { Meta } = Card;
  const { Content, Sider } = Layout;

  function getItem(label, key, children) {
    return {
      key,
      children,
      label: (
        <Link
          to="https://ant.design"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          {label}
        </Link>
      ),
    };
  }

  useEffect(() => {
    setLoading(true);

    axios({
      method: "Get",
      url: "https://fakestoreapi.com/products/categories",
    })
      .then((res) => {
        setCategories(res.data);
        console.log("res.data\n", res.data);
      })

      .catch((err) => console.error(err))
      .finally(() => {});

    axios({
      method: "Get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setProducts(res.data);
      })

      .catch((err) => console.error(err))

      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setItems([
      getItem(categories[0], "1", [
        getItem("Tom", "3"),
        getItem("Bill", "4"),
        getItem("Alex", "5"),
      ]),
      getItem(categories[1], "2", [
        getItem("Tom", "6"),
        getItem("Bill", "7"),
        getItem("Alex", "8"),
      ]),
      getItem(categories[2], "sub1", [
        getItem("Tom", "9"),
        getItem("Bill", "10"),
        getItem("Alex", "11"),
      ]),
      getItem(categories[2], "sub2", [
        getItem("Team 1", "12"),
        getItem("Team 2", "13"),
      ]),
    ]);
  }, [categories]);

  const displayProducts = () => {
    return products.map((product, i) => {
      return (
        <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
          <ProductCard product={product} isLoading={isLoading} />
        </Col>
      );
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
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div
                style={{
                  overflow: "auto",
                  height: "100vh",
                  position: "fixed",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  margin: 16,
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                style={{ textTransform: "capitalize" }}
              />
            </Sider>
            <Layout className="site-layout">
              <Content
                style={{
                  margin: "0 16px",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <Row
                  className="mx-auto"
                  style={{ paddingTop: 50, paddingBottom: 50 }}
                  gutter={[16, { xs: 4, sm: 8, md: 16, lg: 24 }]}
                >
                  {displayProducts()}
                </Row>
              </Content>
            </Layout>
          </Layout>
        </>
      )}
    </>
  );
}
