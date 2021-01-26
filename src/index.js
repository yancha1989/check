import React from "react";
import ReactDom from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import App from "./components/App"

ReactDom.render (
    <Router>
        <App />
    </Router>,
    document.getElementById("root"));