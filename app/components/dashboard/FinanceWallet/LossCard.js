import React, { useState } from "react";
import { Input, Button, Card, Slider, Select } from "antd";

const { Option } = Select;

const selectBefore = (
  <Select
    defaultValue="last"
    className="select-before gx-bg-aqua gx-text-white"
  >
    <Option value="last">Last</Option>
  </Select>
);

const LossCard = () => {
  const [order, setOrder] = useState("limit");
  const [on, setOn] = useState("off");
  const [off, setOff] = useState("off");
  return (
    <Card>
      <div className="gx-flex-row gx-mt-4">
        <h5>Stop Loss</h5>
      </div>
      <div className="gx-flex-row">
        <Button
          onClick={() => {
            setOrder("limit");
          }}
          className={`gx-w-50 gx-mx-0 ${
            order === "limit" ? "gx-bg-aqua gx-text-white" : "gx-bg-grey"
          }`}
        >
          Limit Order
        </Button>
        <Button
          onClick={() => {
            setOrder("market");
          }}
          className={`gx-w-50 gx-mx-0 ${
            order === "market" ? "gx-bg-aqua gx-text-white" : "gx-bg-grey"
          }`}
        >
          Market Order
        </Button>
      </div>
      <h6 className="gx-mt-1">
        Will execute at actual rates when the price meets Stop Loss conditions
      </h6>
      <Input
        addonBefore={selectBefore}
        addonAfter="USDT"
        defaultValue="10439.73"
        className="gx-mt-4"
      />
      <div className="gx-flex-row gx-mt-4">
        {/* <div className="gx-w-66">
          <Slider defaultValue={30} reverse={true} />
        </div>
        <div className="gx-w-33">
          <Input
            addonAfter="%"
            defaultValue="-5.00"
            className="gx-text-center"
          />
        </div> */}
      </div>
      <h6 className="gx-mt-3">Stop Loss timeout</h6>
      <div className="gx-flex-row">
        <div className="gx-flex-row">
          <Button
            onClick={() => setOn("off")}
            className={`gx-mx-0 gx-px-5 ${
              on === "off" ? "gx-bg-aqua gx-text-white" : "gx-bg-grey"
            }`}
          >
            OFF
          </Button>
          <Button
            onClick={() => setOn("on")}
            className={`gx-mx-0 gx-px-5 ${
              on === "on" ? "gx-bg-aqua gx-text-white" : "gx-bg-grey"
            }`}
          >
            ON
          </Button>
        </div>
        <Input
          addonAfter="Sec"
          defaultValue="300"
          className="gx-w-33 gx-ml-4"
        />
      </div>
      <h6 className="gx-mt-3">Trailing Stop Loss</h6>
      <div className="gx-flex-row">
        <div className="gx-flex-row">
          <Button
            onClick={() => setOff("off")}
            className={`gx-mx-0 gx-px-5 ${
              off === "off" ? "gx-bg-aqua gx-text-white" : "gx-bg-grey"
            }`}
          >
            OFF
          </Button>
          <Button
            onClick={() => setOff("on")}
            className={`gx-mx-0 gx-px-5 ${
              off === "on" ? "gx-bg-aqua gx-text-white" : "gx-bg-grey"
            }`}
          >
            ON
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LossCard;
