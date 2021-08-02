import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

import SessionForm from "./sessionForm";

const mSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);