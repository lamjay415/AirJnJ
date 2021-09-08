import React from 'react';
import { selectMyReservations } from '../../reducers/selectors';
import { fetchReservations } from '../../actions/reservation_actions'
import { connect } from 'react-redux';
import ReservationDetail from './reservationDetail';
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
                :(
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

export default connect(mSTP, mDTP)(ReservationIndex);

