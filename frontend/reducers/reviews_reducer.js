import { RECEIVE_ALL_REVIEWS } from "../actions/reviews_actions";

const reviewReducer = (state={}, action) => {
    
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, state, action.reviews);
        // case RECEIVE_REVIEW:
        //     return Object.assign({}, state, {[action.review.id]: action.review});
        default:
            return state;
    }
}

export default reviewReducer;