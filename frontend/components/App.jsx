import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreateFormContainer from './listings/createFormContainer';
import Home from './Home';
import { Route, Link, Switch } from 'react-router';
import HostingsContainer from './hostings/hostingsContainer';
import ListingsIndexContainer from './listings/listingsIndexContainer';
import ListingsPage from './ListingsPage';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <ProtectedRoute path='/become-a-host' component={CreateFormContainer}/>
            <ProtectedRoute path='/hostings' component={HostingsContainer}/>
            <Route exact path='/listings' component={ListingsPage}/>
        </Switch>
    </div>
);

export default App;

