import { connect } from 'react-redux';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import SignupPage from './signup_page';
import {unredirect,closeAll} from '../../actions/navbar_ui_actions.js';
import {redirected} from '../../actions/navbar_ui_actions'

const demoUser={user:{username:"guest", password:"password"}};


const mapStateToProps = (state, ownProps)=>({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),
    redirectedFrom: state.ui.redirectedFrom
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    signup: (user)=>dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeAll: () => dispatch(closeAll()),
    loginGuest: () => dispatch(login(demoUser)),
    unredirect: () => dispatch(unredirect())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);