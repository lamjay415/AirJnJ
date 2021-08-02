import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", ()=>{
    ReactDOM.render(<h1>Welcome to AirJnJ</h1>, document.getElementById('root'));
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const store = configureStore();
    // console.log(store);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});