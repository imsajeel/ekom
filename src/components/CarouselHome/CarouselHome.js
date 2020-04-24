import React from "react";
import { Carousel } from "antd";

import "./CarouselHome.css";

const CarouselImages = [
  {
    id: "1",
    alt: "samsung-galaxy-s20",
    url:
      "https://www.symbios.pk/catalog/view/theme/default/assets/images/sliders/samsung-galaxy-s20.jpg",
  },
  {
    id: "2",
    alt: "oppo-reno-3",
    url:
      "https://www.symbios.pk/catalog/view/theme/default/assets/images/sliders/oppo-reno-3.jpg",
  },
  {
    id: "3",
    alt: "samsung-galaxy-s20",
    url:
      "https://www.symbios.pk/catalog/view/theme/default/assets/images/sliders/samsung-galaxy-s20.jpg",
  },
  {
    id: "4",
    alt: "oppo-reno-3",
    url:
      "https://www.symbios.pk/catalog/view/theme/default/assets/images/sliders/oppo-reno-3.jpg",
  },
];

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
