import React from 'react';
import { connect } from 'react-redux';
import {createReservation, deleteReservation} from '../../actions/reservation_actions';

class ReservationBox extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            userId: this.props.currentUser,
            listingId: this.props.listing.id,
            startDate: '',
            endDate: '',
            price: this.props.listing.price,
            total: '',
            guests: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    calculateDays(start, end){
        let day = 24 * 60 * 60 * 1000;
        let startDate = new Date(start);
        let endDate = new Date(end);
        return Math.round(Math.abs((startDate - endDate)/ day))+1;
    }

    handleSubmit(e){
        e.preventDefault();
        const reservation = Object.assign({}, this.state);
        reservation.total = this.calculateDays(reservation.startDate, reservation.endDate) * reservation.price;
        this.props.createReservation(reservation).then(()=> console.log('dates have been reserved'));
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    render(){
        return(
            <div className='reservation-box'>
                <div className='res-price'>${this.state.price} <span className='res-input'>/ day</span></div>
                <form onSubmit={this.handleSubmit} className='res-form-cont'>
                    <div className='res-form'>
                        <div className='res-date'>
                            <div className='res-label'>CHECK-IN
                                <input className='res-input'
                                    type='date'
                                    value={this.state.startDate}
                                    onChange={this.update('startDate')}
                                />
                            </div>
                            
                            <div className='res-label'>CHECK-OUT
                                <input className='res-input'
                                    type='date'
                                    value={this.state.endDate}
                                    onChange={this.update('endDate')}
                                />
                            </div>
                        </div>
                        <div className='res-label'>Guests</div>
                        <input className='res-input'
                            type='number'
                            value={this.state.guests}
                            onChange={this.update('guests')}
                            placeholder='1 guest'
                        />
                        </div>
                    <input 
                        type='submit'
                        value='Reserve'
                        className='form-button'/>
                </form>
            </div>
        )
    }
}

// const mSTP = (state,ownProps) => ({
//     reservation: state.entities.reservation
// })

const mDTP = dispatch => ({
    createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(null, mDTP)(ReservationBox);

