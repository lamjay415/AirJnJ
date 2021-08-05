import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./sessionForm";
import React from 'react';
import { closeModal,openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    loginForm: (
        <button onClick={()=> dispatch(openModal('login'))}>
            or login here
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);