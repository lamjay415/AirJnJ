import React from 'react';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './sessionForm/loginFormContainer';
import SignupFormContainer from './sessionForm/signupFormContainer';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal/>
        <div className='entry-container'>
            <div className='header-container'>
                <div className='logo'>airjnj</div>
                <div className='nav'>Tabs</div>
                <div className='user-container'>
                    <div className='host-link'>Become a host</div>
                    <GreetingContainer/>
                </div>
            </div>
        </div>
        {/* <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/> */}
    </div>
);

export default App;

