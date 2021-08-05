import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Header from './Header';

const Home = () => (

    <div>
        <Modal/>
        <div className='entry-container'>
            <Header/>
        </div>
    </div>

)

export default Home;