import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Navbar from './navbar';
import { toggleProfile, toggleLoginForm} from '../../actions/navbar_ui_actions';
const mapStateToProps = (state, ownProps)=>({
    currentUser: state.session.currentUser,
    showLogin: state.ui.showLogin,
    showProfile: state.ui.showProfile
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    logout: ()=>dispatch(logout()),
    login: (user)=> dispatch(login(user)),
    toggleProfile: () => dispatch(toggleProfile()),
    toggleForm: () => dispatch(toggleLoginForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);