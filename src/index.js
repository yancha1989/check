import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from "./components/App"
import Try from "../TryServer/Try"


ReactDOM.render(
    <BrowserRouter>
        <Try />
    </BrowserRouter>,
document.getElementById("root"));
    