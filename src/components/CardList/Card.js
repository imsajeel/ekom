import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
const { Meta } = Card;

const Cardi = (cardData, title, price) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "20px" }}
      cover={
        <img
          style={{
            padding: "10px",
            maxWidth: "240px",
            height: "250px",
            width: "auto",
          }}
          alt="sa"
          src={cardData.cardData}
        />
      }
    >
      <Meta title={cardData.title} description={`Rs. ${cardData.price}/-`} />
      <div className="cardButtons">
        <Button type="primary">Buy</Button>
        <Button icon={<ShoppingCartOutlined />}></Button>
        <Button icon={<HeartOutlined />}></Button>
      </div>
    </Card>
  );
};

export default Cardi;
