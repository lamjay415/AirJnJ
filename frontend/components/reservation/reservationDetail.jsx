import React from 'react';
import { fetchListing } from '../../actions/listing_actions';
import { connect } from 'react-redux';

class ReservationDetail extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.reservation.listingId);
    }

    render(){
        const {reservation} = this.props;
        const listing= this.props.listing[0]
        if(listing === undefined){
            return null;
        }
        return (
            <div className='res-detail-container'>
                <div className='res-detail-header'>
                    <div className='res-date'>
                        <div>{reservation.startDate}</div>
                        <div> - </div>
                        <div>{reservation.endDate}</div>
                    </div>
                    <div>{listing.location}</div>
                </div>
                <div className='res-listing'>
                    <div></div>
                </div>
            </div>
        )
    }

}

const mSTP = state => ({
    listing: Object.values(state.entities.listings)
})

const mDTP = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
})

export default connect(mSTP,mDTP)(ReservationDetail);