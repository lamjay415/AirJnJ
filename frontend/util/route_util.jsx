import { withRouter, Route, Redirect } from "react-router";
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? (<Component {...props}/>) : (<Redirect to='/'/>)
        }  
    />
);

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mSTP,null)(Auth));