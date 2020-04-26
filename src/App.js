import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import MainMenu from "./components/MainMenu/MainMenu";
import FooterComp from "./components/Footer/FooterComp";
import Signin from "./components/Signin/Signin";
import Cart from "./components/Cart/Cart";

import Home from "./pages/Home";

import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Header, Content, Footer } = Layout;

let route = "hoame";

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Layout className="layout">
          <Header>
            <MainMenu />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            {route === "home" ? <Home /> : <Cart />}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <FooterComp />
          </Footer>
          }
        </Layout>
      </div>
    );
  }
}

export default App;
