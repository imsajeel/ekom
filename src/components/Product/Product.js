import React from "react";
import { Card } from "antd";
import "./Product.css";

import dbCardList from "../../database/dbCardList";

const Product = () => {
  return (
    <div className="ProductPage">
      <Card title="Product" bordered={false} className="ProductCard">
        <div className="Product">
          <div className="ProductImage">
            <img src={dbCardList[0].coverURL} alt={dbCardList[0].title} />
          </div>
          <div className="ProductDetails">
            <h1>
              {dbCardList[0].title} Paskitanisabeautifulcountryofthisuniverse
            </h1>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;
