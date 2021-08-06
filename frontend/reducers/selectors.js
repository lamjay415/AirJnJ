export const selectMyHostings = state => {

    const allListings = Object.values(state.entities.listings);
    const currentUser = state.session.id;
    console.log(state);
    console.log(allListings);
    console.log('current user: ' + currentUser);
    return allListings.filter(listing => {
        if(listing.userId === currentUser){
            return listing;
        }
    }); 

}