import { connect } from 'react-redux';
import { logout, login, clearSessionErrors } from '../../actions/session_actions';
import Navbar from './navbar';
import { toggleProfile, toggleLoginForm, closeAll} from '../../actions/navbar_ui_actions';
import {
    GetAllEvents,
    GetEventsbyCategory,
    GetBookmarked,
    GetRegistered,
    GetMyEvents,
    GetRecent,
    GetUpcoming

} from '../../actions/event_actions';

const demoUser={user:{username:"guest", password:"password"}};



const mapStateToProps = (state, ownProps)=>({
    currentUser: state.session.currentUser,
    showLogin: state.ui.showLogin,
    showProfile: state.ui.showProfile,
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    logout: ()=>dispatch(logout()),
    login: (user)=> dispatch(login(user)),
    loginGuest: () => dispatch(login(demoUser)),
    toggleProfile: () => dispatch(toggleProfile()),
    toggleForm: () => dispatch(toggleLoginForm()),
    closeAll: () => dispatch(closeAll()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    getUpcoming: () => dispatch(GetUpcoming())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);