import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import LoginPage from "./views/LoginPage/LoginPage";
import { createBrowserHistory } from "history";
import "./assets/scss/material-kit-react.scss?v=1.10.0";
var hist = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          <Route path='/' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
