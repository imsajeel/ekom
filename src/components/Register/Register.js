import React from "react";
import "../Signin/Signin.css";
import { Card, Form, Input, Button } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";

const Register = () => {
  return (
    <div className="SigninCard">
      <Card title="Register" bordered={false} className="SigninForm">
        <Form>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Full name"
            />
          </Form.Item>
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
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="registerBt">
          <p>Have an account?</p>
          <Button type="primary">Sign in</Button>
        </div>
      </Card>
    </div>
  );
};

export default Register;
