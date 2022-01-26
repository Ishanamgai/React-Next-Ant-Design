import React from "react";
import { Select, Button } from "antd";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";

const OrderMenu = () => {
  return (
    <div className="gx-d-none gx-d-lg-flex gx-justify-content-between">
      <div style={{ width: "140px" }} className="gx-flex-row">
        <div>
          <Select defaultValue="coin" style={{ width: "80px" }}>
            <Option value="coin">Coin</Option>
          </Select>
        </div>
        <Button className="gx-ml-1">
          <SearchOutlined />
        </Button>
      </div>
      <div style={{ width: "150px" }}>
        <Select defaultValue="coin" style={{ width: "140px" }}>
          <Option value="coin">Creation Date</Option>
        </Select>
      </div>
      <div style={{ width: "72px" }}>
        <Button>Units</Button>
      </div>
      {/* <div style={{ width: "250px" }} className="gx-flex-row">
        <div>
          <Select defaultValue="coin" style={{ width: "90px" }}>
            <Option value="coin">Status</Option>
          </Select>
        </div>
        <Button className="gx-ml-2">
          <SyncOutlined />
        </Button>
      </div> */}
      <div style={{ width: "90px" }}>
        <Select defaultValue="coin">
          <Option value="coin">Profit</Option>
        </Select>
      </div>
      <div style={{ width: "90px" }}>
        <Button className="">Actions</Button>
      </div>
    </div>
  );
};

export default OrderMenu;
