import React from "react";
import { Card, Steps } from "antd";
import {
  ShoppingCartOutlined,
  SolutionOutlined,
  DollarCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./Cart.css";

///

////

///

//

///

//

const { Step } = Steps;

const Cart = () => {
  return (
    <div className="Cart">
      <Card title="Cart" bordered={false} className="CartCard">
        <Steps>
          <Step status="process" title="Cart" icon={<ShoppingCartOutlined />} />
          <Step
            status="wait"
            title="Verification"
            icon={<SolutionOutlined />}
          />
          <Step status="wait" title="Pay" icon={<DollarCircleOutlined />} />
          <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </Steps>
        <hr />
      </Card>
    </div>
  );
};

export default Cart;
