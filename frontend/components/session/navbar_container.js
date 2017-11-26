import { connect } from 'react-redux';
import { logout, login, clearSessionErrors } from '../../actions/session_actions';
import Navbar from './navbar';
import { toggleProfile, toggleLoginForm, closeAll} from '../../actions/navbar_ui_actions';


const mapStateToProps = (state, ownProps)=>({
    currentUser: state.session.currentUser,
    showLogin: state.ui.showLogin,
    showProfile: state.ui.showProfile,
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    logout: ()=>dispatch(logout()),
    login: (user)=> dispatch(login(user)),
    toggleProfile: () => dispatch(toggleProfile()),
    toggleForm: () => dispatch(toggleLoginForm()),
    closeAll: () => dispatch(closeAll()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);