import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchUser } from '../../actions/user_actions'
// import SecondaryHeader from '../SecondaryHeader';
import Header from '../Header';
import ReservationBoxContainer from '../reservation/reservationBoxContainer';
import Modal from '../modal/modal';
class ListingDetail extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.id);
    }

    render(){
        const {listing} = this.props;
        if(listing === undefined){
            return null;
        }
        
        const host = this.props.users[this.props.listing.userId]
        const currentUser = this.props.currentUser;
        const photos = listing.photoUrls.map((url,idx) => {
            return (
                <img src={url} key={`pic${idx}`} className='listing-photo'/>
            )
        });
        const amenities = listing.amenities.split(',').join(' ·');
        return(
            <div>
                <Modal/>
                <Header className='secondary-header-container'/>
                <div className='listing-page'>
                    <div className='listing-body'>
                        <div className='listing-title'>{listing.title}</div>
                        <div className='listing-photos'>{photos}</div>
                        <div className='listing-info'>
                            <div className='listing-text-div'>
                                <div className='listing-subtitle'>{listing.privacyType} hosted by {host.firstName}</div>
                                <div className='listing-stats'>{listing.maxGuests} guests - {listing.propertyType} - {listing.numBeds} beds - {listing.numBathrooms} bath</div>
                                <div className='listing-description'>
                                    {listing.description}
                                </div>
                                <div className='listing-offers'>What this place offers</div>
                                <div className='listing-amenities'>{amenities}</div>
                            </div>
                            <ReservationBoxContainer listing={listing} 
                            currentUser={currentUser}
                            />
                        </div>  
                    </div>
                </div>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    let listing = state.entities.listings[ownProps.match.params.id];
    return {
        listing,
        currentUser: state.session.id,
        users: state.entities.users
    }
};

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mSTP, mDTP)(ListingDetail);