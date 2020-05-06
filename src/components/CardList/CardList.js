import React from "react";
import Cardi from "./Card";
import "./CardList.css";

import dbCardList from "../../database/dbCardList";

let cardsList = dbCardList.map((card) => {
  return (
    <Cardi cardData={card.images[0]} title={card.title} price={card.price} />
  );
});

const CardList = () => {
  return <div className="CardsList">{cardsList}</div>;
};

export default CardList;
