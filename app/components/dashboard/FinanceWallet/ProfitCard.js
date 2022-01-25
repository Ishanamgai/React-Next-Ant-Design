import React, { useState } from "react";
import { Input, Button, Card, Slider } from "antd";

const ProfitCard = () => {
  const [order, setOrder] = useState("limit");
  const [on, setOn] = useState("off");
  return (
    <Card>
      <div className="gx-flex-row gx-mt-4">
        <h5>Take Profit</h5>
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
        Will be placed on the exchange order book beforehand
      </h6>
      <Input addonAfter="USDT" defaultValue="11962.20" className="gx-mt-3" />
      <div className="gx-mt-4 gx-flex-row">
        <div className="gx-w-66">
          <Slider defaultValue={30} />
        </div>
        <div className="gx-w-33">
          <Input addonAfter="%" defaultValue="10" className="gx-text-center" />
        </div>
      </div>
      <Button primary className="gx-mt-5 gx-w-100">
        Split Targets
      </Button>
      <h6 className="gx-mt-3">Trailing Take Profit</h6>
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
      <div className="gx-mt-3">
        <h6>Follow max price with deviaton(%)</h6>
      </div>
      <div className="gx-flex-row">
        <div className="gx-w-66">
          <Slider defaultValue={30} reverse={true} />
        </div>
        <div className="gx-w-33">
          <Input
            addonAfter="%"
            defaultValue="-5.00"
            className="gx-text-center"
          />
        </div>
      </div>
    </Card>
  );
};

export default ProfitCard;
