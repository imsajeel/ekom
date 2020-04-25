import React from "react";
import { Carousel } from "antd";

import CarouselImages from "../../database/dbCarouselHome";
import "./CarouselHome.css";

let images = CarouselImages.map((image) => {
  return (
    <div className="carouselImage">
      <img src={image.url} alt={image.alt} />
    </div>
  );
});
const CarouselHome = () => {
  return (
    <Carousel className="carouselCenter" autoplay>
      {images}
    </Carousel>
  );
};

export default CarouselHome;
