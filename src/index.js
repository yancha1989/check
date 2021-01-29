import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import AboutPage from "./AboutPage/AboutPage.js";
import FagPage from "./FagPage/FagPage.js"
import Registration from "./Registration/Registration.js"
import MainHeader from './MainHeader/MainHeader'

import './App.css'



function App() {
    
        return (
           <div className='App'>  
                <Switch>
                   <Route path='/aboutpage' component={ AboutPage } />
                    <Route path='/faqpage' component={ FagPage } />
                    <Redirect from='/' to='/aboutpage'/>
                </Switch>
            </div> 
        )
    
    }

export default App;
