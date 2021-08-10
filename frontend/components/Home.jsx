import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Header from './Header';
import SearchBarContainer from './search/searchBarContainer';

const Home = () => (

    <div>
        <Modal/>
        <div className='entry-container'>
            <Header/>
            <SearchBarContainer/>
        </div>
        
    </div>

)

export default Home;