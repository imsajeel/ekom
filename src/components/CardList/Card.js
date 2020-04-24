import React from "react";
import { Card } from "antd";

import dbCardList from "../../database/dbCardList";

const { Meta } = Card;

const Cardi = () => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "20px" }}
      cover={<img alt="sa" src={dbCardList[0].coverURL} />}
    >
      <Meta
        title={dbCardList[0].title}
        description={`Rs. ${dbCardList[0].price} /-`}
      />
    </Card>
  );
};

export default Cardi;
