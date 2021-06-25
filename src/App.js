import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import "./default.scss";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
      {/* <Register/> */}
    </div>
  );
}

export default App;
