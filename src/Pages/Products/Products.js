import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spin, Card, Row, Col, Breadcrumb, Layout, Menu } from "antd";
// import { HeartOutlined, HeartFilled, ShopFilled } from "@ant-design/icons";

import api from "../../Lib/axios";

import ProductCard from "../../Componets/Product-Card/Product-Card";
import "./Products.css";
import { clippingParents } from "@popperjs/core";

export default function Products() {
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const { Meta } = Card;
  const { Content, Sider } = Layout;

  function getItem(label, key) {
    const children = api.get(`/category/${key}/subcategories/`);
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

    api
      .get("category/list/")
      .then((res) => {
        const myData = res.data;
        setCategories(res.data);
      })

      .catch((err) => console.error(err))
      .finally(() => {});

    api
      .get("product/list/")
      .then((res) => {
        setProducts(res.data);
      })

      .catch((err) => console.error(err))

      .finally(() => setLoading(false));
  }, []);

  const displayProducts = () => {
    return products.map((product, i) => {
      return (
        <Col
          key={product.id}
          className="gutter-row"
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
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
              onBreakpoint={(broken) => {}}
              onCollapse={(collapsed, type) => {}}
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
