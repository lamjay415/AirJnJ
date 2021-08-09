import React from 'react';

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
    }

    handleSubmit(e){
        e.preventDefault();
        const reservation = Object.assign({}, this.state);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    render(){
        return(
            <div className='reservation-box'>
                <div>${this.state.price} / day</div>
                <form onSubmit={this.handleSubmit}>
                    <div>CHECK-IN</div>
                    <input
                        type='date'
                        value={this.state.startDate}
                        onChange={this.update('startDate')}
                    />
                    <div>CHECK-OUT</div>
                    <input
                        type='date'
                        value={this.state.endDate}
                        onChange={this.update('endDate')}
                    />
                    <div>Guests</div>
                    <input
                        type='number'
                        value={this.state.guests}
                        onChange={this.update('guests')}
                    />
                    <input 
                        type='submit'
                        value='Reserve'
                        className='form-button'/>
                </form>
            </div>
        )
    }
}

export default ReservationBox;

