import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { withRouter } from 'react-router';
import ListingDetail from './listingDetailContainer';

class ListingsIndex extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchListings();
    // }

    handleClick(listing){
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/listings/${listing.id}`);
        }
    }

    render(){
        const listings = this.props.listings.map((listing,idx) => {
            return (
                <div className='listing-item' key={`listing${idx}`} onClick={this.handleClick(listing)}>
                    <div>Title: {listing.title}</div>
                    <div>Guests: {listing.maxGuests}</div>
                    <div>{listing.propertyType}</div>
                    <div>{listing.numBeds} Beds</div>
                    <div>{listing.numBathrooms} Bathrooms</div>
                    <div>{listing.amenities}</div>
                    <div>${listing.price} / night</div>
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

// const mSTP = state => ({
//     listings: Object.values(state.entities.listings)
// });

// const mDTP = dispatch => ({
//     fetchListings: () => dispatch(fetchListings())
// });

export default withRouter(ListingsIndex);

