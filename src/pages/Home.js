import React from "react";

import CarouselHome from "../components/CarouselHome/CarouselHome";
import Brands from "../components/Brands/Brands";
import CardList from "../components/CardList/CardList";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <Brands />
      <CardList />
    </div>
  );
};

export default Home;
