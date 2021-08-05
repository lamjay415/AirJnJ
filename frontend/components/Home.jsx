import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const Home = () => (

    <div>
        <Modal/>
        <div className='entry-container'>
            <div className='header-container'>
                <Link to='/' className='logo'>airjnj</Link>
                <div className='nav'>
                    <Link to='/listings' className='link'>Places to Stay</Link>
                </div>
                <div className='user-container'>
                    <Link to='/become-a-host' className='link'>Become a host</Link>
                    <GreetingContainer/>
                </div>
            </div>
        </div>
    </div>

)

export default Home;