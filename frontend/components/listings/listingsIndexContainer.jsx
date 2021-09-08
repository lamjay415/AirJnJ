import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
import ListingDetail from './listingDetailContainer';
import ListingInfo from './listingInfo';

class ListingsIndex extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        // debugger;
        if(this.props.listings.length===0){
            return (
                <div className='listings-container'>
                    <div className='no-listings-container'>
                        <div className='no-listings-message'>Sorry! There are no listings in this area.
                        Try searching for a different city!</div>
                        <Link to='/'>Click Here to go back</Link>
                    </div>
                </div>
            )
        }

        let listings = this.props.listings.map((listing,idx) => {
            // const amenities = listing.amenities.split(',').join(' ·');
            return (
                <ListingInfo listing={listing} key={`listing${idx}`}/>
            );
        });

        return (
            <div className='listings-container'>
                <div className='listings-header'>{listings.length} Stays Found in {this.props.location}</div>
                {listings}
            </div>
        )
    }

}

const mSTP = (state,ownProps) => ({
     location: ownProps.match.params.location
});

// const mDTP = dispatch => ({
//     fetchListings: () => dispatch(fetchListings())
// });

export default withRouter(connect(mSTP,null)(ListingsIndex));

