import React from "react";
import { useHistory } from "react-router";
import { auth } from "./../../firebase/util";
import { selectUser } from './../../features/user/userSlice';
import { useSelector } from 'react-redux';
import Logo from "./../../assets/logo.png";
import "./styles.scss";

function Header(){
  const history = useHistory();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="header">
        <img onClick={() => history.push("/")} src={Logo} className="logo"/>
        
            { user ? (
              <div className="menus">
                <button onClick={() => auth.signOut()} >Sign Out</button>
              </div>
            ) : (
              <div className="menus">
                <button onClick={() => history.push("/login")} >Sign In</button>
                <button onClick={() => history.push("/register")} >Register</button>
              </div>
            )}            
        
    </div>
  );
};

export default Header;