export const selectMyHostings = state => {

    const allListings = Object.values(state.entities.listings);
    const currentUser = state.session.id;
    return allListings.filter(listing => {
        if(listing.userId === currentUser){
            return listing;
        }
    }); 

};

export const selectMyReservations = state => {

    const allReservations = Object.values(state.entities.reservations);
    const currentUser = state.session.id;
    return allReservations.filter(reservation => {
        if(reservation.userId === currentUser){
            return reservation;
        }
    }); 

};

export const selectMyReviews = (state,id) => {
    const allReviews = Object.values(state.entities.reviews);
    return allReviews.filter(review => review.listingId === id)
}

export const selectOnLocation = (state,location) => {
    const allListings = Object.values(state.entities.listings);
    return allListings.filter(listing => {
        if(listing.location.includes(location)){
            return listing;
        }
    });
}

export const asArray = ({ listings }) => (
    Object.keys(listings).map(key => listings[key])
);