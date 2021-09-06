import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';

import Login  from '../container/auth/Login';
import Register  from '../container/auth/Register';

export const AuthRoutes = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/Login"
                        component={ Login }
                    />
                    <Route 
                        exact
                        path="/auth/Register"
                        component={ Register }
                    />

                    <Redirect to="/auth/Login" />

                </Switch>
            </div>

        </div>
    )
}