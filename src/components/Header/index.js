import React from "react";
import Logo from "./../../assets/logo.png";
import "./styles.scss";

function Header(){
  return (
    <div className="header">
        <img src={Logo} className="logo"/>
        <div className="menus">
            <button>Sign In</button>
            <button>Register</button>
        </div>
    </div>
  );
};

export default Header;