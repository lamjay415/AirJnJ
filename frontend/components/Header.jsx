import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import GreetingContainer from './greeting/greeting_container';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Header = (props) => (
    
    <div className={props.className}>
        <Link to='/' className='logo'>airjnj</Link>

        <div className='user-container'>
            <div onClick={()=>props.currentUser ? props.history.push('/become-a-host') : props.openModal('login')}
                className='become-a-host'>
                Become a host
            </div>
            <GreetingContainer/> 
            </div>
    </div>

);

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP,mDTP)(Header));