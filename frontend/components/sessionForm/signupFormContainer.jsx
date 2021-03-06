import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
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
        <div onClick={()=> {dispatch(clearErrors());dispatch(openModal('login'))}} className='div-link'>
            or login here
        </div>
    ),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);