import React from "react";
import { useHistory } from "react-router";
import Logo from "./../../assets/logo.png";
import "./styles.scss";

function Header(){
  const history = useHistory();
  
  return (
    <div className="header">
        <img onClick={() => history.push("/")} src={Logo} className="logo"/>
        <div className="menus">
            <button onClick={() => history.push("/login")} >Sign In</button>
            <button onClick={() => history.push("/register")} >Register</button>
        </div>
    </div>
  );
};

export default Header;