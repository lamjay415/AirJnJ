import { connect } from 'react-redux';
import ListingForm from './listingForm';
import React from 'react';

import { fetchListing, updateListing } from '../../actions/listing_actions'

const mSTP = (state,ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id],
    formType: 'Update Listing'
});

const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    processForm: listing => dispatch(updateListing(listing))
});

class EditListingForm extends React.Component{
    
    componentDidMount(){
        this.props.fetchListing(this.props.match.params.id);
    }

    render(){
        const { listing, processForm, formType} = this.props;
        if(!listing) return null;
        return(
            <ListingForm
                listing={listing}
                processForm={processForm}
                formType={formType}    
            />
        )
    }

};

export default connect(mSTP, mDTP)(EditListingForm);