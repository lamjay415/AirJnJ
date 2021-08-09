import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import Header from '../Header';
import ReservationBox from '../reservation/reservation';
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
        const currentUser = this.props.currentUser;
        return(
            <div>
                <Header/>
                <div className='listing-body'>
                    <div className='listing-title'>{listing.title}</div>
                    <div>Pics</div>
                    <div className='listing-info'>
                        <div className='listing-description'>
                            <div>Description: {listing.description}</div>
                            <div>Location: {listing.location}</div>
                            <div>Price: {listing.price}</div>
                        </div>
                        <ReservationBox listing={listing} 
                        currentUser={currentUser}
                        />
                    </div>
                </div>

            </div>
            // <div>
            //     <div>Title: {listing.title}</div>
            //     <div>Description: {listing.description}</div>
            //     <div>Location: {listing.location}</div>
            //     <div>Price: {listing.price}</div>
            // </div>
        )
    }

}

const mSTP = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.id],
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
});

export default connect(mSTP, mDTP)(ListingDetail);