import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { withRouter } from 'react-router';

class ListingInfo extends React.Component{ 
    
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.listing.id);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push(`/listings/${this.props.listing.id}`);
    }

    render(){

        if(this.props.listing === undefined){
            return null;
        }
        const {listing} = this.props;

        return (
            <div className='listing-item' onClick={this.handleClick.bind(this)}>
                <img src={listing.photoUrls[0]} className='listing-pic'/>
                <div className='listing-detail'>
                    <div className='listing-top-and-mid'> 
                        <div className='listing-top'>
                            <div>{listing.title}</div>
                        </div>
                        <div className='listing-mid'>
                            <div className='listing-mid-text-1'>{listing.maxGuests} guests · {listing.numBeds} beds · {listing.numBathrooms} baths</div>
                            <div className='listing-mid-text-2'>{listing.amenities.split(',').join(' ·')}</div>
                        </div>
                    </div>
                    <div className='listing-bot'>
                        <div className='listing-price'>${listing.price} <span className='listing-price-span'>/ night</span></div>
                    </div>
                </div>
            </div>
        )
    }
}


const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default withRouter(connect(null,mDTP)(ListingInfo));