import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservation_actions";

const reservationReducer = (state={}, action) => {

    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_RESERVATIONS:
            return Object.assign({}, state, action.reservations);
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.id] : action.reservation});
        case REMOVE_RESERVATION:
            let nextState = Object.assign({}, state);
            delete nextState[action.listingId];
            return nextState;
        default:
            return state;
    }

}

export default reservationReducer;