import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const Header = () => (
    
    <div className='header-container'>
        <Link to='/' className='logo'>airjnj</Link>

        <div className='user-container'>
            <Link to='/become-a-host' className='link'>Become a host</Link>
            <GreetingContainer/>
            </div>
    </div>

)

export default Header;