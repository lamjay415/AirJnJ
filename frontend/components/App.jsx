import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreateFormContainer from './listings/createFormContainer';
import Home from './Home';
import { Route, Link, Switch } from 'react-router';
import HostingsContainer from './hostings/hostingsContainer';

const App = () => (
    <div>
        <Switch>
        {/* <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/> */}
            <Route exact path='/' component={Home}/>
            <ProtectedRoute path='/become-a-host' component={CreateFormContainer}/>
            <ProtectedRoute path='/hostings' component={HostingsContainer}/>
        </Switch>
    </div>
);

export default App;

