import React from "react";
import { MobileOutlined } from "@ant-design/icons";

const Logo = () => {
  return (
    <div>
      <h1>
        <MobileOutlined
          style={{
            padding: "20px",
            fontSize: "48px",
            color: "#08c",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </h1>
    </div>
  );
};

export default Logo;
