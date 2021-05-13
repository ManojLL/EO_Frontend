import React from 'react'
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import LoginPage from "./views/LoginPage/LoginPage";
import SignUp from "./views/SingupPage/singUp";
import {createBrowserHistory} from "history";
import "./assets/scss/material-kit-react.scss?v=1.10.0";

var hist = createBrowserHistory();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Router history={hist}>
                    <Switch>
                        <Route path='/' component={LoginPage} exact/>

                    </Switch>
                    <Route path='/singUp' component={SignUp} exact/>
                </Router>
            </div>
        );
    }

}


export default App;
