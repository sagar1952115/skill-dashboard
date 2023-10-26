import React from "react";
import Logo from "../../asset/logo.png";
import User from "../../asset/user.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="logo" />
      <div className="hcontainer-right">
        <img src={User} alt="user" />
        <p>Siddharth Jain</p>
      </div>
    </div>
  );
};

export default Header;
