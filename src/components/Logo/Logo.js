import React from "react";
import LogoImage from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logoImage">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
