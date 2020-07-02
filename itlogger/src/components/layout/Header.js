import React from "react";
import Logo from "../../assets/default1.png";

const Header = () => {
  return (
    <img
      style={{
        width: "400px",
        height: "260px",
        textAlign: "center",

        display: "column",
      }}
      src={Logo}
      alt=""
    ></img>
  );
};
export default Header;
