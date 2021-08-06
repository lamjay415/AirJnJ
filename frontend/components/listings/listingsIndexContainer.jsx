import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingDetail from './listingDetailContainer';

class ListingsIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListings();
    }

    render(){
        const listings = this.props.listings.map((listing,idx) => {
            return (
                <div className='listing-item' key={`listing${idx}`}>
                    <div>Title: {listing.title}</div>
                    <div>Guests: {listing.maxGuests}</div>
                    <div>{listing.propertyType}</div>
                    <div>{listing.numBeds} Beds</div>
                    <div>{listing.numBathrooms} Bathrooms</div>
                    <div>{listing.amenities} zz </div>
                    <div>{listing.price} per Night</div>
                </div>
            );
        });

        return (
            <div className='listings-container' >
                {listings}
            </div>
        )
    }

}

const mSTP = state => ({
    listings: Object.values(state.entities.listings)
});

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(ListingsIndex);

