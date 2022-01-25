import { Tabs, Col, Row, Input, Slider, Button, Select, Card } from "antd";
import InfoCard from "./Infocard";
import ProfitCard from "./ProfitCard";
import LossCard from "./LossCard";

const { TabPane } = Tabs;

const TabNav = () => {
  return (
    <Tabs defaultActiveKey="2" className="gx-mt-4">
      <TabPane tab="Buy/Sell" key="1">
        <div style={{ height: "400px" }}></div>
      </TabPane>
      <TabPane tab="Smart Trade" key="2">
        <Row>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <InfoCard />
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <ProfitCard />
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <LossCard />
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}></Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Button className="gx-w-100 gx-bg-aqua gx-text-white">
              Create Trade
            </Button>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}></Col>
        </Row>
      </TabPane>
      <TabPane tab="Smart Sell" key="3">
        <div style={{ height: "400px" }}></div>
      </TabPane>
      <TabPane tab="Smart Cover" key="4">
        <div style={{ height: "400px" }}></div>
      </TabPane>
      <TabPane tab="Smart Buy" key="5">
        <div style={{ height: "400px" }}></div>
      </TabPane>
    </Tabs>
  );
};

export default TabNav;
