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
        maxGuests: 0,
        numBedrooms: 0,
        numBeds: 0,
        numBathrooms: 0,
        amenities: '',
        title: '',
        description: ''
    },
    formType: 'Create Listing'
});

const mDTP = dispatch => ({
    processForm: listing => dispatch(createListing(listing))
});

export default connect(mSTP, mDTP)(ListingForm);