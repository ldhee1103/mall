import React, {useRef} from "react";
import { useHistory } from "react-router";
import { auth } from "./../../firebase/util";
import "./styles.scss";
import Logo from "./../../assets/logo.png";

function Register(){
  const history = useHistory();
  const refEmail = useRef(null);
  const refPwd = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(refEmail.current.value, refPwd.current.value)
    .then((authUser) => {
        alert("Sign Up Complete!!");
        console.log(authUser);
    })
    .catch((error) => {
        alert(error.message);
    });
  }

  return (
    <div className="register">
        <img onClick={() => history.push("/")} src={Logo} className="logo"/>
        <form>
            <input ref={refEmail} type="email" placeholder="Email Address"/>
            <input ref={refPwd} type="password" placeholder="Password"/>
            <button className="btn_register" onClick= { register }>
                Register
            </button>
        </form>
    </div>
  );
};

export default Register;