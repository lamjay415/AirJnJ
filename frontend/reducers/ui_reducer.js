import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import photoReducer from "./photo_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    photo: photoReducer
});

export default uiReducer;