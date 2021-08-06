import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import React from 'react';
import SessionForm from "./sessionForm";
import { closeModal,openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    signupForm: (
        <div onClick={()=> dispatch(openModal('signup'))} className='div-link'>
            or signup here
        </div>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);