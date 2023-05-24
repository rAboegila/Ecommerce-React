import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Button, Table, notification, Pagination } from "antd";
import { CheckCircleTwoTone, InfoCircleFilled } from "@ant-design/icons";

import api from "../../Lib/api";

export default function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(1);

  const [antApi, contextHolder] = notification.useNotification();
  const errorNotification = (Msg) => {
    antApi.info({
      message: Msg,
      placement: "top",
      style: { color: "#ec6060" },
      icon: <InfoCircleFilled />,
    });
  };

  function changePage(currentPage) {
    setCurrentOrder(currentPage);
  }
  function fetchData() {
    api
      .get("/order/list_orders/")
      .then((response) => setOrders(response.data))
      .catch((err) => errorNotification("Couldn't Return Orders"))
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    fetchData();
  }, []);

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
      { orders.length > 0 && (<>
      
        <Order
          key={orders[currentOrder - 1].id}
          order={orders[currentOrder - 1]}
          renderOrders={fetchData}
        />
        <Pagination
          className="m-3"
          defaultCurrent={1}
          total={orders.length}
          pageSize={1}
          onChange={changePage}
        />
      </>
      )
      }
      {
        orders.length === 0 && (<Card bordered={false} className="order">
          <p>You Still Didn't Order so far</p>
        </Card>)
      }
    </>
  );
}

function Order({ order, renderOrders }) {
  const { Column, ColumnGroup } = Table;
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
  async function cancelOrder(id) {
    try {
      const response = await api.delete(`/order/delete/${id}/`);
      console.log("response", response);
      successNotification("Order Deleted Successfully");
      renderOrders();
    } catch (err) {
      errorNotification("Couldn't Delete Order");
    }
  }

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
            <Column
              title=""
              dataIndex="product_name"
              key="product_name"
            />
          </ColumnGroup>
          <Column title="Size" dataIndex="size" key ="size" />
          <Column title="Color" dataIndex="color" key="color" />
          <Column
            title="Quantity"
            dataIndex="quantity"
            key="quantity"
          />
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
                : "TBD"}
            </div>
          </div>
          <div className="row">
            <div className="col">Delivery</div>
            <div className="col">
              {order.delivered_time
                ? new Date(order.delivered_time).toLocaleString()
                : "TBD"}
            </div>
          </div>
          <div className="row">
            <div className="col">Shipped</div>
            <div className="col">
              {order.shipped_time
                ? new Date(order.shipped_time).toLocaleString()
                : "TBD"}
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
                onClick={() => cancelOrder(order.id)}
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
