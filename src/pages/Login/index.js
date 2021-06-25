import React from "react";
import { useHistory } from "react-router";
import "./styles.scss";
import Logo from "./../../assets/logo.png";
import Google from "./../../assets/google_icon.png";

function Login(){
  const history = useHistory();

  return (
    <div className="login">
        <img onClick={() => history.push("/")} src={Logo} className="logo"/>
        <form>
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <button className="btn_login">
                Login
            </button>
            <fieldset>
              <legend>다른방법으로 로그인</legend>
              <div>
                  <img src={Google} className="google_logo"/>
              </div>
            </fieldset>
        </form>
    </div>
  );
};

export default Login;