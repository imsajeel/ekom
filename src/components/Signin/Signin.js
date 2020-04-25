import React from "react";
import "./Signin.css";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Signin = () => {
  return (
    <div className="SigninCard">
      <Card title="Signin" bordered={false} className="SigninForm">
        <Form>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item shouldUpdate>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Checkbox style={{ marginLeft: "10px" }}>Remember me</Checkbox>
          </Form.Item>
        </Form>

        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Signin;
