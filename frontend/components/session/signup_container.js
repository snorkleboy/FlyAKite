import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupPage from './signup_page';

const mapStateToProps = (state, ownProps)=>({
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),   
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    signup: (user)=>dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);