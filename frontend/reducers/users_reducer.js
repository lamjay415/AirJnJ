import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const userReducer = (state={}, action) => {

    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_USER: 
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    }

}

export default userReducer;