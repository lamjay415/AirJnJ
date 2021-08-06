import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';

class ListingDetail extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.id);
    }

    render(){
        const {listing} = this.props;
        return(
            <div>
                <div>Title: {listing.title}</div>
                <div>Description: {listing.description}</div>
                
                <div>Location: {listing.location}</div>
                <div>Price: {listing.price}</div>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
})



export default connect(mSTP, mDTP)(ListingDetail);