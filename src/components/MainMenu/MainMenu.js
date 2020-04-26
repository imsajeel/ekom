import React from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  ShoppingCartOutlined,
  HeartOutlined,
  ContactsOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const MainMenu = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home">
        <HomeFilled />
        Home
      </Menu.Item>
      <Menu.Item key="search">Search</Menu.Item>

      <Menu.Item key="about">
        <UserOutlined />
        About
      </Menu.Item>
      <Menu.Item key="contact">
        <ContactsOutlined />
        Contact
      </Menu.Item>
      <Menu.Item key="cart">
        <ShoppingCartOutlined />
        Cart
      </Menu.Item>
      <Menu.Item key="wishlist">
        <HeartOutlined />
        Wishlist
      </Menu.Item>
      <Menu.Item key="signin">
        <LoginOutlined />
        Sign in
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
