import React, { useEffect, useState } from "react";
import { Card, Modal } from "antd";
import { Button, Table, notification, Pagination } from "antd";
import { CheckCircleTwoTone, InfoCircleFilled } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";

import api from "../../Lib/api";

export default function Orders() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(1);
  const [submiting, setSubmitting] = useState(false);

  const [antApi, contextHolder] = notification.useNotification();
  const successNotification = (Msg) => {
    antApi.info({
      message: Msg,
      placement: "top",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
      style: { backgroundColor: "#43b47f" },
    });
  };
  const errorNotification = (Msg) => {
    antApi.info({
      message: Msg,
      placement: "top",
      style: { color: "#ec6060" },
      icon: <InfoCircleFilled />,
    });
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setSubmitting(true);
    setConfirmLoading(true);
    cancelOrder(currentOrder);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  function changePage(currentPage) {
    setCurrentOrder(currentPage);
  }

  function fetchData() {
    api
      .get("/order/list_orders/")
      .then((response) => setOrders(response.data))
      .catch(() => errorNotification("Couldn't Return Orders"))
      .finally(() => setIsLoading(false));
  }

  function cancelOrder(id) {
    api
      .delete(`/order/delete/${id}/`)
      .then(() => {
        successNotification("Order Deleted Successfully");
        fetchData();
        setOpen(false);
      })
      .catch((err) => {
        errorNotification("Couldn't Delete Order");
      })
      .finally(() => setSubmitting(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function Order({ order }) {
    const { Column, ColumnGroup } = Table;

    const orderClass = `order order-${order.status}`;
    return (
      <>
        {contextHolder}
        <Card bordered={false} className={orderClass} key={order.id}>
          <Table
            dataSource={order.orderItems}
            size="small"
            pagination={{ position: ["none", "none"] }}
            rowKey={order.id}
          >
            <ColumnGroup title="Product">
              <Column
                title=""
                dataIndex=""
                key="product_image_url"
                render={(record) => (
                  <img
                    style={{ width: "5vw" }}
                    src={record.product_image_url}
                    alt="product"
                  />
                )}
              />
              <Column title="" dataIndex="product_name" key="product_name" />
            </ColumnGroup>
            <Column title="Size" dataIndex="size" key="size" />
            <Column title="Color" dataIndex="color" key="color" />
            <Column title="Quantity" dataIndex="quantity" key="quantity" />
            <Column
              title="Price"
              dataIndex="product_price"
              key="product_price"
            />
            <Column title="Total" dataIndex="total" key="total" />
          </Table>
          <div className="container order-footer">
            <div className="row">
              <div className="col">Payment Method</div>
              <div className="col">{order.payment_method}</div>
            </div>
            <div className="row">
              <div className="col">Status</div>
              <div className="col">{order.status}</div>
            </div>
            <div className="row">
              <div className="col">Ordered At</div>
              <div className="col">
                {order.created_at
                  ? new Date(order.created_at).toLocaleString()
                  : "~"}
              </div>
            </div>
            <div className="row">
              <div className="col">Delivery</div>
              <div className="col">
                {order.delivered_time
                  ? new Date(order.delivered_time).toLocaleString()
                  : "~"}
              </div>
            </div>
            <div className="row">
              <div className="col">Shipped</div>
              <div className="col">
                {order.shipped_time
                  ? new Date(order.shipped_time).toLocaleString()
                  : "~"}
              </div>
            </div>
            <div className="row">
              <div className="col">Address</div>
              <div className="col">{order.shipping_address}</div>
            </div>
            <div className="row">
              <div className="col">Total</div>
              <div className="col">{order.total}</div>
            </div>
            {order.status === "pending" && (
              <div className="row">
                <Button
                  disabled={order.status !== "pending"}
                  type="primary"
                  danger
                  onClick={() => showModal()}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Card>
      </>
    );
  }
  if (isLoading)
    return (
      <>
        {contextHolder}
        <Card loading></Card>
      </>
    );
  return (
    <>
      {contextHolder}
      {orders.length > 0 && (
        <>
          <Order
            key={orders[currentOrder - 1].id}
            order={orders[currentOrder - 1]}
          />
          <Pagination
            className="m-3"
            defaultCurrent={1}
            total={orders.length}
            pageSize={1}
            onChange={changePage}
          />
          <Modal
            title="Cancel Order"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" danger onClick={handleOk}>
                {(submiting && <LoadingOutlined />) || (!submiting && "Cancel")}
              </Button>
            ]}
          ></Modal>
        </>
      )}
      {orders.length === 0 && (
        <Card bordered={false} className="order">
          <p>You Still Didn't Order so far</p>
        </Card>
      )}
    </>
  );
}
