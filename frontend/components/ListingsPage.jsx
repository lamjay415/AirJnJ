import React from 'react';
import Header from './Header';
import ListingsIndexContainer from './listings/listingsIndexContainer';

const ListingsPage = () => (

    <div className='listings-page'>
        <Header/>
        <div className='listings-page-body'>
            <ListingsIndexContainer/>
            <div className='map-container'>Google Map</div>
        </div>
    </div>

);

export default ListingsPage;