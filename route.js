import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import RegisterComponent from './src/Register';
import LoginComponent from './src/Login';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoginComponent} />
                <Route exact path='/register' component={RegisterComponent} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes;