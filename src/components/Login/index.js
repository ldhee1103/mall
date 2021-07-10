import React, {useRef} from "react";
import { useHistory } from "react-router";
import "./styles.scss";
import { auth } from "./../../firebase/util";
import Logo from "./../../assets/logo.png";
import Google from "./../../assets/google_icon.png";
import { signInWithGoogle } from "./../../firebase/util";


function Login(){
  const history = useHistory();
  const refEmail = useRef(null);
  const refPwd = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(refEmail.current.value, refPwd.current.value)
    .then((userAuth) => {
      alert("Sign In!");
      console.log(userAuth);
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div className="login">
        <img onClick={() => history.push("/")} src={Logo} className="logo"/>
        <form>
            <input ref={refEmail} type="email" placeholder="Email Address"/>
            <input ref={refPwd} type="password" placeholder="Password"/>
            <button className="btn_login" onClick={signIn}>
                Login
            </button>
            <fieldset>
              <legend>다른방법으로 로그인</legend>
              <div>
                  <img src={Google} className="google_logo" onClick={ signInWithGoogle }/>
              </div>
            </fieldset>
        </form>
    </div>
  );
};

export default Login;