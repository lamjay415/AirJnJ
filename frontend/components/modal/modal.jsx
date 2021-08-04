import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../sessionForm/loginFormContainer';
import SignupFormContainer from '../sessionForm/signupFormContainer';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({modal, closeModal}) => {
    if(!modal){
        return null;
    }
    let component;
    switch(modal){
        case 'login':
            component = <LoginFormContainer/>;
            break;
        case 'signup':
            component = <SignupFormContainer/>;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e=>e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);