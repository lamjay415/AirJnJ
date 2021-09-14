import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import listingsReducer from "./listings_reducer";
import reservationReducer from './reservation_reducer';
import reviewReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  reservations: reservationReducer,
  reviews: reviewReducer
});

export default entitiesReducer;