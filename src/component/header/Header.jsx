import React from "react";
import Logo from "../../asset/logo.png";
import User from "../../asset/user.png";

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="logo" />
      <div>
        <img src={User} alt="user" />
        <p>Siddharth Jain</p>
      </div>
    </div>
  );
};

export default Header;
