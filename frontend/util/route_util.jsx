import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { redirected} from '../actions/navbar_ui_actions';
import Signup from '../components/session/signup_container'




const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
});


const mapAuthorStateToProps = state =>({
    loggedIn: Boolean(state.session.currentUser),
    events: state.events
});

const mapDispatchToProps = (dispatch) =>({
    saveRedirected: (url) => dispatch(redirected(url))
});



const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ component: Component, path, loggedIn }) =>{ return(
    <Route
        path={path}
        render={props => (
            loggedIn ? 
                <Component {...props} path={path} />
            : 
                <Redirect push to={{
                    pathname: '/signup',
                    state: { redirectedFrom: path }
            }} />
        )}
    />
);}






//match is being weird
//need to get params out of path?
const Authors = ({ component: Component, path, match, session, events, loggedIn}) => {

    return(
        <Route
            path={path}
            render={props => (
                loggedIn && events.byIDs[match.params.id].userId === session.currentUser.id?
                    <Component {...props} /> 
                 : 
                    <Redirect to="/signup" />
            )}
        />
    );
};
export const AuthorsRoute = withRouter(connect(mapAuthorStateToProps)(Authors));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));