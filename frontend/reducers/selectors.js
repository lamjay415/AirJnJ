export const selectMyHostings = state => {

    const allListings = Object.values(state.entities.listings);
    const currentUser = state.session.id;
    return allListings.filter(listing => {
        if(listing.userId === currentUser){
            return listing;
        }
    }); 

};