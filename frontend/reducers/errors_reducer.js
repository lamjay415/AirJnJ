import { combineReducers } from "redux";
import formErrorsReducer from "./form_errors_reducer";

import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  form: formErrorsReducer
});

export default errorsReducer;