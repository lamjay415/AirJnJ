import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./sessionForm";
import React from 'react';
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    loginForm: (
        <button onClick={()=> dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);