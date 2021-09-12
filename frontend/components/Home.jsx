import React from 'react';
import Header from './Header';
import SearchBarContainer from './search/searchBarContainer';
import HomeContent from './home/homeContent';
import Footer from './Footer';

const Home = () => (

    <div>
        <div className='entry-container'>
            <Header className='header-container'/>
            <SearchBarContainer/>
        </div>
        <HomeContent/>
        <Footer/>
    </div>

)

export default Home;