import { connect } from 'react-redux';
import ListingForm from './listingForm';

import { createListing } from '../../actions/listing_actions'

const mSTP = (state) => ({
    listing: {
        user_id: state.session.id,
        property_type_group: '',
        property_type: '',
        privacy_type: '',
        price: '',
        location: '',
        max_guests: '',
        num_bedrooms: '',
        num_beds: '',
        num_bathrooms: '',
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