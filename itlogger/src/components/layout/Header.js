import React from "react";
import Logo from "../../assets/default.png";

const Header = () => {
  return (
    <img
      style={{
        width: "400px",
        height: "60px",
        textAlign: "center",
        paddingTop: "20px",
        paddingRight: "20px",
      }}
      src={Logo}
      alt=""
    ></img>
  );
};
export default Header;
