import React from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const MainMenu = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home">
        <HomeOutlined />
        Home
      </Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
  );
};

export default MainMenu;
