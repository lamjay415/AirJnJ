import { OPEN_PHOTO } from "../actions/photo_actions";

const photoReducer = (state={}, action) => {

    Object.freeze(state);
    switch(action.type){
        case OPEN_PHOTO:
            return action.photoUrl;
        default:
            return state;
    }
}

export default photoReducer;