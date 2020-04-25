import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Register from "../Register/Register";
import "./Signin.css";

const Signin = () => {
  return (
    <div>
      <div className="SigninCard">
        <Card title="Sign in" bordered={false} className="SigninForm">
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
                prefix={<MailOutlined className="site-form-item-icon" />}
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
          <div className="registerBt">
            <p>Are you a new user?</p>
            <Button type="primary">Register</Button>
          </div>
        </Card>
      </div>
      <Register />
    </div>
  );
};

export default Signin;
