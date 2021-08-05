import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreateFormContainer from './listingForm/createFormContainer';
import Home from './Home';
import { Route, Link, Switch } from 'react-router';

const App = () => (
    <div>
        <Switch>
        {/* <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/> */}
            <Route exact path='/' component={Home}/>
            <ProtectedRoute path='/become-a-host' component={CreateFormContainer}/>
        </Switch>
    </div>
);

export default App;

