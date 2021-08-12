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

    handleClick(listing){
        return (e) => {
            e.preventDefault();
            this.props.history.push(`/listings/${listing.id}`);
        }
    }

    render(){
        // debugger;
        let listings = this.props.listings.map((listing,idx) => {
            return (
                <div className='listing-item' key={`listing${idx}`} onClick={this.handleClick(listing)}>
                    <img src={listing.photoUrls[0]} className='listing-pic'/>
                    <div className='listing-detail'>
                        <div className='listing-top-and-mid'> 
                            <div className='listing-top'>
                                <div>title</div>
                            </div>
                            <div className='listing-mid'>
                                <div className='listing-mid-text-1'>3 guest</div>
                                <div className='listing-mid-text-2'>kitchen</div>
                            </div>
                        </div>
                       
                        <div className='listing-bot'>
                            <div>test</div>
                        </div>
                    </div>
                </div>
            );
        });

        if(listings.length===0){
            return (
                <div className='listings-container'>
                    <div className='no-listings-container'>
                        <div className='no-listings-message'>Sorry! There are no listings in this area.</div>
                        <Link to='/'>Click Here to go back</Link>
                    </div>
                </div>
            )
        }
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

