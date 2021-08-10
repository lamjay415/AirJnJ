import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import listingsReducer from "./listings_reducer";
import reservationReducer from './reservation_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  reservations: reservationReducer
});

export default entitiesReducer;