import React from "react";

import MainMenu from "./components/MainMenu/MainMenu";
import Logo from "./components/Logo/Logo";

import Home from "./pages/Home";

import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Header, Content, Footer } = Layout;

let route = "home";

function App() {
  return (
    <div>
      <Logo />
      <Layout className="layout">
        <Header>
          <MainMenu />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {route === "home" ? <Home /> : <h1>Somthing went wrong!!</h1>}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
