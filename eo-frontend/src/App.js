import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/login/loginPAge";
import { createBrowserHistory } from "history";

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
