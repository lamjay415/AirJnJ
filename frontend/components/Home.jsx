import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Header from './Header';
import SearchBarContainer from './search/searchBarContainer';
import HomeContent from './home/homeContent';
import Footer from './Footer';

const Home = () => (

    <div>
        <Modal/>
        <div className='entry-container'>
            <Header className='header-container'/>
            <SearchBarContainer/>
        </div>
        <HomeContent/>
        {/* <Footer/> */}
    </div>

)

export default Home;