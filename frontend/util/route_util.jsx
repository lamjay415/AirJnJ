import { withRouter, Route, Redirect } from "react-router";
import { connect } from 'react-redux';
import React from 'react';
import Modal from "../components/modal/modal";

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? (<Component {...props}/>) : (<Redirect to='/'/>)
        }  
    />
);

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props}/>
        ) : (
            // <Modal modal='login'/>
            (<Redirect to='/'/>)
        )
    )} />
)

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mSTP,null)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP,null)(Protected));