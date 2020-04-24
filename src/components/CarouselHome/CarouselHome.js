import React from "react";
import { Carousel } from "antd";

import CarouselImages from "../../database/dbCarouselHome";
import "./CarouselHome.css";

const CarouselHome = () => {
  return (
    <Carousel className="carouselCenter" autoplay>
      <div className="carouselImage">
        <img src={CarouselImages[0].url} alt={CarouselImages[0].alt} />
      </div>
      <div className="carouselImage">
        <img src={CarouselImages[1].url} alt={CarouselImages[1].alt} />
      </div>
      <div className="carouselImage">
        <img src={CarouselImages[2].url} alt={CarouselImages[2].alt} />
      </div>
      <div className="carouselImage">
        <img src={CarouselImages[3].url} alt={CarouselImages[3].alt} />
      </div>
    </Carousel>
  );
};

export default CarouselHome;
