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
      <div className="footerMain">
        <div className="footerCol">
          <h1>Payment Methods</h1>
          <img
            src="https://www.nextgen.pk/wp-content/uploads/2019/03/payments-methods-e1557944732347.png"
            alt="Payment Methods"
          />
        </div>
        <div className="footerCol">
          <h1>Policies</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consectetur tempus condimentum. Praesent ut dictum felis. Maecenas
            placerat urna urna, vitae consequat lacus ultricies et.
          </p>
        </div>
        <div className="footerCol">
          <h1>Brands</h1>
          <ul>
            <li>
              <a href="https://github.com/imsajeel">Apple</a>
            </li>
            <li>
              <a href="https://github.com/imsajeel">Samsung</a>
            </li>
            <li>
              <a href="https://github.com/imsajeel">Huawei</a>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <h1>Other Projects</h1>
          <ul>
            <li>
              <a href="https://github.com/imsajeel">Robofriends</a>
            </li>
            <li>
              <a href="https://github.com/imsajeel">Face rocgination</a>
            </li>
            <li>
              <a href="https://github.com/imsajeel">Covid 19 (new)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
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
    </div>
  );
};

export default FooterComp;
