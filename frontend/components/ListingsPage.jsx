import React from 'react';
import Header from './Header';
import ListingsIndexContainer from './listings/listingsIndexContainer';
import ListingsMap from './map/ListingsMap';
import Modal from './modal/modal';

const ListingsPage = () => (

    <div className='listings-page'>
        <Modal/>
        <Header/>
        <div className='listings-page-body'>
            <ListingsIndexContainer/>
            <ListingsMap/>
        </div>
    </div>

);

export default ListingsPage;