import { connect } from 'react-redux';
import ListingForm from './listingForm';

import { clearErrors, createListing } from '../../actions/listing_actions'

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
    formType: 'Create Listing',
    errors: state.errors.form
});

const mDTP = dispatch => ({
    processForm: listing => dispatch(createListing(listing)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(ListingForm);