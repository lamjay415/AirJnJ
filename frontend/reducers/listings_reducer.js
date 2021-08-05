import { RECEIVE_ALL_LISTINGS,RECEIVE_LISTING,REMOVE_LISTING  } from "../actions/listing_actions";

const listingsReducer = (state={}, action) => {

    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_LISTINGS:
            return Object.assign({}, state, action.listings);
        case RECEIVE_LISTING:
            return Object.assign({}, state, {[action.listing.id] : action.listing})
        case REMOVE_LISTING:
            let nextState = Object.assign({}, state);
            delete nextState[action.listingId];
            return nextState;
        default:
            return state;
    }

};

export default listingsReducer;