import * as ReserveApi from '../util/reservation_api_util';

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'EMOVE_RESERVATION';

const receiveAllReservations = reservations => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
});

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

export const fetchReservations = () => dispatch => (
    ReserveApi.fetchReservations()
        .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const fetchReservation = reservationId => dispatch => (
    ReserveApi.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)))
);

export const createReservation = reservation => dispatch => (
    ReserveApi.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
)

export const deleteReservation = reservationId => dispatch => (
    ReserveApi.deleteReservation(reservationId)
        .then(() => dispatch(removeReservation(reservationId)))
)