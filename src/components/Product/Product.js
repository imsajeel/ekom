import React from "react";
import { Card, Rate, Button, InputNumber } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import "./Product.css";

import dbCardList from "../../database/dbCardList";

let id = 0;

//
const moreImages = dbCardList[id].images.map((image) => (
  <img src={image} alt="" />
));
//
function onChange(value) {
  console.log("changed", value);
}

const Product = () => {
  return (
    <div className="ProductPage">
      <Card title="Product" bordered={false} className="ProductCard">
        <div className="Product">
          <div className="ProductImage">
            <img src={dbCardList[id].images[0]} alt={dbCardList[id].title} />
          </div>
          <div className="ProductDetails">
            <h1>{dbCardList[id].title}</h1>
            <Rate disabled defaultValue={dbCardList[id].rating} />
            <a href="https://example.com"> {dbCardList[id].ratedby} ratings</a>
            <br />
            Brand: <a href="https://example.com">{dbCardList[id].brand}</a>{" "}
            <br />
            <br />
            <hr />
            <h1>Rs {dbCardList[id].price}</h1>
            <br />
            Quantity:
            <InputNumber
              style={{ marginLeft: "10px" }}
              defaultValue={1}
              min={1}
              max={10}
              onChange={onChange}
            />
            <br />
            <br />
            <Button className="ProductButton" type="primary">
              Buy now
            </Button>
            <Button className="ProductButton" icon={<ShoppingCartOutlined />}>
              Add to Cart
            </Button>
            <Button className="ProductButton" icon={<HeartOutlined />}>
              Add to Wishlist
            </Button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <h1 style={{ textAlign: "center" }}> More About</h1>
        <hr />
        <br />
        <br />
        <div className="ProductMore">{moreImages}</div>
      </Card>
    </div>
  );
};

export default Product;
