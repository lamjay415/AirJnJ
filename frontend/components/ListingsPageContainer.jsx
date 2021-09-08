import React from 'react';
import Header from './Header';
import ListingsIndexContainer from './listings/listingsIndexContainer';
import ListingsMap from './map/ListingsMap';
import Modal from './modal/modal';
import { connect } from 'react-redux';
import { asArray } from '../reducers/selectors';
import { fetchListings } from '../actions/listing_actions';
import { selectOnLocation } from '../reducers/selectors';
// import SecondaryHeader from './SecondaryHeader';

class ListingsPage extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings();
    }

    render(){
        return(
            <div className='listings-page'>
                <Modal/>
                <Header className='secondary-header-container'/>
                <div className='listings-page-body'>
                    <ListingsIndexContainer listings={this.props.listings}/>
                    <ListingsMap listings={this.props.listings_arr} location={this.props.location}/>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    listings: selectOnLocation(state,ownProps.match.params.location),
    listings_arr: asArray(state.entities),
    location: ownProps.match.params.location
});

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(ListingsPage);