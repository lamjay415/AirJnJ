import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import Greeting from "./greeting";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Greeting);
