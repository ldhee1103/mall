import React from "react";
import { useHistory } from "react-router";
import "./styles.scss";
import Logo from "./../../assets/logo.png";

function Register(){
  const history = useHistory();

  return (
    <div className="register">
        <img onClick={() => history.push("/")} src={Logo} className="logo"/>
        <form>
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <button className="btn_register">
                Register
            </button>
        </form>
    </div>
  );
};

export default Register;