import React, { useState } from "react";
import { Input, Button, Card } from "antd";

const InfoCard = () => {
  const [percent, setPercent] = useState(5);
  return (
    <Card>
      <div className="gx-flex-row gx-mt-4">
        <h5>Units</h5>
      </div>
      <Input addonAfter="BTC" defaultValue="0.250000" />
      <h6 style={{ marginTop: 20 }}>Size from available amount</h6>
      <div className="gx-flex-row">
        <Button onClick={() => setPercent(100)} className={`gx-flex-row gx-justify-content-center gx-px-3 gx-mx-0  gx-w-20 ${percent === 100 ? 'gx-bg-aqua gx-text-white' : 'gx-bg-grey'}`}>
          100%
        </Button>
        <Button onClick={() => setPercent(5)} className={`gx-flex-row gx-justify-content-center gx-px-3 gx-mx-0  gx-w-20 ${percent === 5 ? 'gx-bg-aqua gx-text-white' : 'gx-bg-grey'}`}>
          5%
        </Button>
        <Button onClick={() => setPercent(10)} className={`gx-flex-row gx-justify-content-center gx-px-3 gx-mx-0  gx-w-20 ${percent === 10 ? 'gx-bg-aqua gx-text-white' : 'gx-bg-grey'}`}>
          10%
        </Button>
        <Button onClick={() => setPercent(25)} className={`gx-flex-row gx-justify-content-center gx-px-3 gx-mx-0  gx-w-20 ${percent === 25 ? 'gx-bg-aqua gx-text-white' : 'gx-bg-grey'}`}>
          25%
        </Button>
        <Button onClick={() => setPercent(50)} className={`gx-flex-row gx-justify-content-center gx-px-3 gx-mx-0  gx-w-20 ${percent === 50 ? 'gx-bg-aqua gx-text-white' : 'gx-bg-grey'}`}>
          50%
        </Button>
      </div>
      <div className="gx-flex-row gx-mt-5">
        <h5>Bought price</h5>
      </div>
      <Input addonAfter="USDT" defaultValue="10874.72" />
      <div className="gx-flex-row gx-mt-4">
        <h6>
          Current Price: <span className="gx-text-primary">10868.39 USDT</span>
        </h6>
      </div>
      <div className="gx-flex-row gx-mt-5">
        <h5>Total</h5>
      </div>
      <Input addonAfter="USDT" defaultValue="2718.68000000" />
    </Card>
  );
};

export default InfoCard;
