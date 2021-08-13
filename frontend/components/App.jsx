import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreateFormContainer from './listings/createFormContainer';
import Home from './Home';
import { Route, Link, Switch } from 'react-router';
import HostingsContainer from './hostings/hostingsContainer';
import ListingsIndexContainer from './listings/listingsIndexContainer';
import ListingsPageContainer from './ListingsPageContainer';
import ListingDetailContainer from './listings/listingDetailContainer';
import EditFormContainer from './listings/editFormContainer';
import ReservationIndexContainer from './reservation/reservationIndexContainer';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <ProtectedRoute path='/become-a-host' component={CreateFormContainer}/>
            <ProtectedRoute exact path='/hostings' component={HostingsContainer}/>
            <Route exact path='/listings' component={ListingsPageContainer}/>
            <Route exact path='/listings/:id' component={ListingDetailContainer}/>
            <Route exact path='/search/:location' component={ListingsPageContainer}/>
            <ProtectedRoute exact path='/hostings/:id/edit' component={EditFormContainer}/>
            <ProtectedRoute exact path='/trips' component={ReservationIndexContainer}/>
        </Switch>
    </div>
);

export default App;

