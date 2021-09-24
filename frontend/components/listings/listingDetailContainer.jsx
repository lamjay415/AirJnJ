import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { fetchUser } from '../../actions/user_actions'
import Header from '../Header';
import ReservationBoxContainer from '../reservation/reservationBoxContainer';
import ReviewsContainer from '../reviews/ReviewsContainer';
import { openModal } from '../../actions/modal_actions';
import { openPhoto } from '../../actions/photo_actions';
import Footer from '../Footer';
class ListingDetail extends React.Component{

    constructor(props){
        super(props);
        this.openImage = this.openImage.bind(this);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.id);
    }

    openImage(url){
        return () => {
            this.props.openPhoto(url);
            this.props.openModal('openPhoto');
        }
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
                <img src={url} key={`pic${idx}`} className='listing-photo' onClick={this.openImage(url)}/>
            )
        });
        const amenities = listing.amenities.split(',').join(' ·');
        return(
            <div>
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
                        <ReviewsContainer listing={listing.id} currentUser={currentUser}/>  
                    </div>
                    <Footer/>
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
    fetchUser: id => dispatch(fetchUser(id)),
    openModal: modal => dispatch(openModal(modal)),
    openPhoto: photoUrl => dispatch(openPhoto(photoUrl))
});

export default connect(mSTP, mDTP)(ListingDetail);