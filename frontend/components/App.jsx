import React from 'react';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './sessionForm/loginFormContainer';
import SignupFormContainer from './sessionForm/signupFormContainer';

const App = () => (
    <div>
        <header>
            <h1>AirJnJ</h1>
            <GreetingContainer/>
        </header>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
    </div>
);

export default App;

