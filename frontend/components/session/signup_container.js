import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps)=>({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
    logout: ()=>dispatch(logout()),
    login: (user)=> dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);