import { useEffect } from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./default.scss";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
import { auth } from "./firebase/util";
import { useSelector, useDispatch } from 'react-redux';
import {login, logout, selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        
          { user ? 
          <Switch>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
          :
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
          }
      </Router>
    </div>
  );
}

export default App;
