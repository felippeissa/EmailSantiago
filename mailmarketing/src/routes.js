import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Forgotpassword from './pages/ForgotPassword';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/ForgotPassword" component={Forgotpassword} />
        </Switch>
        </BrowserRouter>
    );
}