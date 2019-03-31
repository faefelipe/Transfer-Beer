import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import Driver from './Components/Driver/Driver';
import Page404 from './Components/404';

const Routes = () => (
    <React.Fragment>
        <BrowserRouter>        
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/admin" component={Admin} />
                <Route path="/driver" component={Driver} />
                <Route path='*' component={Page404} />
            </Switch>
        </ BrowserRouter>
    </React.Fragment>
)

export default Routes;