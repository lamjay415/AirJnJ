import React from 'react';
import { closeModal } from "../../actions/modal_actions";
import { connect } from 'react-redux';

const Image = ({imageUrl}) => (
    <img src={imageUrl} className='modal-image'/>
);

const mSTP = state => ({
    imageUrl: state.ui.photo
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Image);