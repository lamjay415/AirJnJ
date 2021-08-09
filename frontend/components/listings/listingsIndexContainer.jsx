import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
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

        let listings = this.props.listings.map((listing,idx) => {
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

        if(listings.length===0){
            listings = (
                <div className='no-listings-container'>
                    <div className='no-listings-message'>Sorry! There are no listings in this area.</div>
                    <Link to='/'>Click Here to go back</Link>
                </div>
            )
        }

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

