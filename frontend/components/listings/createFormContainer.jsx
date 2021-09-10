import { connect } from 'react-redux';
import ListingForm from './listingForm';

import { createListing } from '../../actions/listing_actions'

const mSTP = (state) => ({
    listing: {
        user_id: state.session.id,
        propertyTypeGroup: '',
        propertyType: '',
        privacyType: '',
        price: 0,
        location: '',
        maxGuests: 1,
        numBedrooms: 1,
        numBeds: 1,
        numBathrooms: 1,
        amenities: '',
        title: '',
        description: '',
        photos: []
    },
    formType: 'Create Listing'
});

const mDTP = dispatch => ({
    processForm: listing => dispatch(createListing(listing))
});

export default connect(mSTP, mDTP)(ListingForm);