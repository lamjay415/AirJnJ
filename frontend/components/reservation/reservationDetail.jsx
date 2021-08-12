import React from 'react';
import { fetchListing } from '../../actions/listing_actions';
import { connect } from 'react-redux';
import ListingInfo from '../listings/listingInfo';
import { deleteReservation } from '../../actions/reservation_actions';
import { withRouter } from 'react-router';

class ReservationDetail extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.reservation.listingId);
    }

    handleClick(e){
        this.props.deleteReservation(this.props.reservation.id);
    }

    render(){
        const {reservation} = this.props;
        const listing= this.props.listings[reservation.listingId];
        if(listing === undefined){
            return null;
        }
        const startDate = new Date(reservation.startDate).toDateString();
        const endDate = new Date(reservation.endDate).toDateString();
        return (
            <div className='trip-detail-container'>
                <div className='trip-detail-header'>
                    <div className='trip-top'>
                        <div className='trip-date'>
                            <div>{startDate}</div>
                            <div>&nbsp;&nbsp;-&nbsp;&nbsp;</div>
                            <div>{endDate}</div>
                        </div>
                        <div className='trip-cancel' onClick={this.handleClick}>Cancel Booking</div>
                    </div>
                    <div className='trip-bot'>
                        <div>{listing.location}</div>
                    </div>
                </div>
                <div className='trip-listing'>
                    <ListingInfo listing={listing}/>
                </div>
            </div>
        )
    }

}

const mSTP = state => ({
    listings: state.entities.listings
})

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    deleteReservation: id => dispatch(deleteReservation(id))
})

export default withRouter(connect(mSTP,mDTP)(ReservationDetail));