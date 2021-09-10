import { connect } from 'react-redux';
import React from 'react';
import { propTypeOpts, propTypeGroupOpts, privacyTypeOpts } from '../../util/dropdown_options_util';
import Header from '../Header';
import EditForm from './editForm';

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
            <div className='listing-edit-page'>
                <Header className='secondary-header-container'/>
                <div className='listing-edit-body'>
                    <EditForm listing={listing} processForm={processForm}/>
                </div>
            </div>
        )
    }

};

export default connect(mSTP, mDTP)(EditListingForm);