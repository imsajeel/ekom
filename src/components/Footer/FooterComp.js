import React from "react";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div>
      <div className="Red">
        <h1>S</h1>
      </div>
      Developed by: Sajeel Aalam
      <br />
      <div className="footerSocialIcons">
        <a
          href="https://github.com/imsajeel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.facebook.com/imsajeelaalam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookOutlined />
        </a>
        <a
          href="https://www.instagram.com/imsajeelaalam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/sajeel-aalam-4075861a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://dribbble.com/imsajeel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleOutlined />
        </a>
      </div>
    </div>
  );
};

export default FooterComp;
