import React from "react";
import { Col, Row, Select, Button, Card } from "antd";
import {
  SyncOutlined,
  MoreOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
import OrderMenu from "./OrderMenu";

const StatusText = () => (
  <h5>Buy order has been placed 0.00188000 bid 0.00187600 ask: 0.00189100</h5>
);
const StatusLoss = () => (
  <div>
    <h6>
      <span className="gx-text-danger">-0.69%</span> 0.00186700
    </h6>
    <div className="gx-flex-row">
      <div style={{ height: "60px", width: "2px" }} className="gx-bg-red"></div>
      <div
        style={{ height: "10px", width: "50px" }}
        className="gx-bg-grey"
      ></div>
      <div
        style={{ height: "20px", width: "2px", marginTop: "-10px" }}
        className="gx-bg-red"
      ></div>
      <div
        style={{ height: "10px", width: "50px" }}
        className="gx-bg-red"
      ></div>
      <div
        style={{ height: "20px", width: "2px" }}
        className="gx-bg-dark"
      ></div>
      <div>
        <div
          style={{ height: "10px", width: "140px" }}
          className="gx-bg-grey"
        ></div>
        <h6 className="gx-mt-2">Buy 0.00188000</h6>
        <h6 className="gx-ml-5">0.00191100</h6>
      </div>
      <div>
        <div
          style={{ height: "30px", width: "2px" }}
          className="gx-bg-aqua"
        ></div>
        <h6 className="gx-text-aqua" style={{ marginLeft: "-10px" }}>
          TP
        </h6>
      </div>
    </div>
    <h6>
      <span className="gx-text-danger">SL</span> 0.00182300
    </h6>
  </div>
);
const StatusProfit = () => (
  <div>
    <h6>
      <span className="gx-text-aqua gx-ml-5">+0.69%</span> 0.00186700
    </h6>
    <div className="gx-flex-row">
      <div style={{ height: "60px", width: "2px" }} className="gx-bg-red"></div>
      <div
        style={{ height: "10px", width: "50px" }}
        className="gx-bg-grey"
      ></div>
      <div
        style={{ height: "20px", width: "2px" }}
        className="gx-bg-dark"
      ></div>
      <div
        style={{ height: "10px", width: "50px" }}
        className="gx-bg-aqua"
      ></div>
      <div
        style={{ height: "20px", width: "2px", marginTop: "-10px" }}
        className="gx-bg-aqua"
      ></div>
      <div>
        <div
          style={{ height: "10px", width: "140px" }}
          className="gx-bg-grey"
        ></div>
        <h6 className="gx-mt-2">Buy 0.00188000</h6>
        <h6 className="gx-ml-5">0.01740900</h6>
      </div>
      <div>
        <div
          style={{ height: "40px", width: "2px" }}
          className="gx-bg-aqua"
        ></div>
        <h6 className="gx-text-aqua" style={{ marginLeft: "-10px" }}>
          TP
        </h6>
      </div>
    </div>
    <h6>
      <span className="gx-text-danger">SL</span> 0.00182300
    </h6>
  </div>
);
const content = [
  {
    status: StatusText,
    profit: <h6 className="gx-text-danger"></h6>,
  },
  {
    status: StatusLoss,
    profit: <h6 className="gx-text-danger">-0.00012025</h6>,
  },
  {
    status: StatusProfit,
    profit: <h6 className="gx-text-aqua">+0.00011664</h6>,
  },
];

const Orders = () => {
  return (
    <Card>
      <Row className="gx-mt-2">
        <Col xl={16} lg={14} md={12} sm={12} xs={12}>
          <h5>You have no open orders</h5>
        </Col>
        <Col xl={8} lg={10} md={12} sm={12} xs={12}>
          <Select style={{ width: 35, float: "right" }}></Select>
        </Col>
        <Col lg={24} md={24} sm={24} className="gx-border-bottom gx-mt-3">
          <OrderMenu />
        </Col>
        <Col lg={24} md={24} sm={24} className="gx-border-bottom gx-mt-3">
          {content.map((item, index) => (
            <div key={index}>
              <div className="gx-flex-column gx-flex-lg-row gx-justify-content-between">
                <div style={{ width: "140px" }} className="gx-flex-row gx-mt-2">
                  <PlaySquareOutlined />
                  <div className="gx-flex-col">
                    <h5 className="gx-text-primary gx-ml-3">ETH_AION</h5>
                    <h6 className="gx-text-primary gx-ml-3">Binance guides</h6>
                  </div>
                </div>
                <div style={{ width: "150px" }} className="gx-mt-2">
                  <div className="gx-flex-col">
                    <h5>09/28/2018</h5>
                    <h6>3:56 PM</h6>
                  </div>
                </div>
                <div style={{ width: "72px" }} className="gx-mt-2">
                  <div className="gx-flex-col">
                    <h5>9.25</h5>
                    <h6>0.01739</h6>
                  </div>
                </div>
                <div style={{ width: "250px" }} className="gx-flex-row gx-mt-2">
                  {item.status()}
                </div>
                <div style={{ width: "90px" }} className="gx-mt-2">
                  {item.profit}
                </div>
                <div className="gx-flex-row gx-mt-2" style={{ width: "90px" }}>
                  <Button
                    className="gx-bg-aqua gx-text-white gx-px-2"
                    style={{ width: "35px" }}
                  >
                    <SyncOutlined />
                  </Button>
                  <Button className="gx-px-2" style={{ width: "35px" }}>
                    <MoreOutlined />
                  </Button>
                </div>
              </div>
              <h6 className="gx-ml-4">You can place a note here</h6>
            </div>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default Orders;
