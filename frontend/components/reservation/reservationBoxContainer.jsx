import React from 'react';
import { connect } from 'react-redux';
import {createReservation, deleteReservation} from '../../actions/reservation_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';

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
            guests: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    calculateDays(start, end){
        let day = 24 * 60 * 60 * 1000;
        let startDate = new Date(start);
        let endDate = new Date(end);
        return Math.round(Math.abs((startDate - endDate)/ day))+1;
    }

    getTotal(days,price){
        return days * price;
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.currentUser){
            const reservation = Object.assign({}, this.state);
            reservation.total = this.getTotal(this.calculateDays(reservation.startDate, reservation.endDate), reservation.price);
            this.props.createReservation(reservation).then(()=> this.props.history.push('/trips'));
        }else{
            this.props.openModal('login');
        }
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    render(){
        let date = new Date();
        let month = date.getMonth()+1
        let day = date.getDate();
        month < 10 ? month = '0'+ month : month;
        day < 10 ? day = '0' + day : day;
        let today = date.getFullYear() + '-' + month + '-' + day;
        let pricing;
        if(this.state.startDate !== '' && this.state.endDate !== ''){
            let numDays = this.calculateDays(this.state.startDate,this.state.endDate);
            pricing = (
                <div className='res-pricing'>
                    <div className='res-calc'>
                        {numDays} nights x ${this.state.price}
                    </div>
                    <div className='res-total'>Total: ${this.getTotal(numDays,this.state.price)}</div>
                </div>
            )
        }
        return(
            <div className='reservation-box'>
                <div className='res-price'>${this.state.price} <span className='res-input'>/ night</span></div>
                <form onSubmit={this.handleSubmit} className='res-form-cont'>
                    <div className='res-form'>
                        <div className='res-date'>
                            <div className='res-label'>CHECK-IN
                                <input className='res-input'
                                    type='date'
                                    value={this.state.startDate}
                                    onChange={this.update('startDate')}
                                    min={today}
                                />
                            </div>
                            
                            <div className='res-label'>CHECK-OUT
                                <input className='res-input'
                                    type='date'
                                    value={this.state.endDate}
                                    onChange={this.update('endDate')}
                                    min={this.state.startDate}
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
                        {pricing}
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
    createReservation: reservation => dispatch(createReservation(reservation)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(null, mDTP)(ReservationBox));

