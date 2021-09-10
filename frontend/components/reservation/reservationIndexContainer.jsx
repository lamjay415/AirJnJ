import React from 'react';
import { selectMyReservations } from '../../reducers/selectors';
import { fetchReservations } from '../../actions/reservation_actions'
import { connect } from 'react-redux';
import ReservationDetail from './reservationDetail';
import { withRouter } from 'react-router';
import { fetchListing } from '../../util/listing_api_util';
// import SecondaryHeader from '../SecondaryHeader'
import Header from '../Header';

class ReservationIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchReservations();
    }

    render(){
        const {reservations} = this.props;
        if(reservations === undefined){
            return null;
        }
        
        const reservationsLists = reservations.map((reservation,idx) => {
            return (
                <ReservationDetail reservation={reservation} key={`res${idx}`}/>
            )
        });

        const emptyPage = (
            <div className='empty-trips-cont'>
                <div>When you’re ready to start planning your next trip, we’re here to help.</div>
                <img src='https://i.gyazo.com/69abf6a8f8597dd9f853f2d02c3fd5d7.png' className='empty-trips-img'/>
                <div className='explore-btn' onClick={()=>this.props.history.push('/')}>Explore Airjnj</div>
            </div>
        )
        return(
            <div className='rev-index-page'>
                <Header className='secondary-header-container'/>
                <div className='rev-index-container'>
                    <div className='rev-header'>Upcoming Trips</div>
                    {reservationsLists.length === 0 ? emptyPage : reservationsLists}
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    reservations: selectMyReservations(state)
});

const mDTP = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
});

export default withRouter(connect(mSTP, mDTP)(ReservationIndex));

