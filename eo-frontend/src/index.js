import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "assets/scss/material-kit-react.scss?v=1.10.0";
import {createBrowserHistory} from "history";


var hist = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <div>
            <App />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
