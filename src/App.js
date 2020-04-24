import React from "react";

import MainMenu from "./components/MainMenu/MainMenu";
import Logo from "./components/Logo/Logo";
import CarouselHome from "./components/CarouselHome/CarouselHome";
import Brands from "./components/Brands/Brands";

import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Logo />
      <Layout className="layout">
        <Header>
          <MainMenu />
        </Header>
        <CarouselHome />
        <Content style={{ padding: "0 50px" }}>
          <Brands />
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
