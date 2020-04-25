import React from "react";
import "./Brands.css";

import BrandsImages from "../../database/dbBrandsImages";

const Brands = () => {
  return (
    <div className="brands">
      <h1>
        Top Brands <hr />
      </h1>

      <div className="brandsList">
        <div className="brandsImage">
          <img src={BrandsImages[0].url} alt={BrandsImages[0].alt} />
        </div>
        <div className="brandsImage">
          <img src={BrandsImages[1].url} alt={BrandsImages[1].alt} />
        </div>
        <div className="brandsImage">
          <img src={BrandsImages[2].url} alt={BrandsImages[2].alt} />
        </div>
        <div className="brandsImage">
          <img src={BrandsImages[3].url} alt={BrandsImages[3].alt} />
        </div>
        <div className="brandsImage">
          <img src={BrandsImages[4].url} alt={BrandsImages[4].alt} />
        </div>
        <div className="brandsImage">
          <img src={BrandsImages[5].url} alt={BrandsImages[5].alt} />
        </div>
        <div className="brandsImage">
          <img src={BrandsImages[6].url} alt={BrandsImages[6].alt} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
