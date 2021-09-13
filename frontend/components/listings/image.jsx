import React from 'react';
import { closeModal } from "../../actions/modal_actions";
import { connect } from 'react-redux';

const Image = ({imageUrl,closeModal}) => (
    <div className='modal-image-cont'>
        <img src="https://img.icons8.com/ios/50/000000/close-window.png" className='close-image' onClick={()=>closeModal()}/>
        <img src={imageUrl} className='modal-image'/>
    </div>
);

const mSTP = state => ({
    imageUrl: state.ui.photo
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Image);