import React from 'react';
import { selectMyReservations } from '../../reducers/selectors';
import { fetchReservations } from '../../actions/reservation_actions'
import { connect } from 'react-redux';
import ReservationDetail from './reservationDetail';
import { fetchListing } from '../../util/listing_api_util';

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

        return(
            <div className='rev-index-container'>
                <div>Upcoming plans</div>
                {reservationsLists}
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

