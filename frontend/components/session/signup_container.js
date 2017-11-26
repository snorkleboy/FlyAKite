import { connect } from 'react-redux';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import SignupPage from './signup_page';
import closeAll from '../../actions/navbar_ui_actions.js';

const demoUser={user:{username:"guest", password:"password"}};


const mapStateToProps = (state, ownProps)=>({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),   
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    signup: (user)=>dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeAll: () => dispatch(closeAll()),
    loginGuest: () => dispatch(login(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);