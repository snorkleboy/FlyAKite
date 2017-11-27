import React from 'react';

import ClearSessionErrors from '../../actions/session_actions.js';
import ProfileDropDown from './profile_drop_down';
import LoginDropDown from './login_drop_down';

import EventListContainer from '../events/eventlist_container';
import ShowPageContainer from '../events/show_container';
import CreateEventContainer from '../events/create_container';
import SideBarContainer from '/home/snorkeboy/Desktop/FlyAKite/frontend/components/side_bar/sidebar_container.js';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
    AuthorsRoute
} from '../../util/route_util.jsx';



class Navbar extends React.Component
{    constructor(props){
        super(props);
    if (this.props.showLogin) {
        this.props.toggleForm();
    }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser && nextProps.showLogin) {
            this.props.toggleForm();
        }
    }
    componentWillUnmount(){
        // console.log("he!!!!!!!!!!!!!!!!!!!!!!!!!!!re");
        this.props.closeAll();
    }
    
    render(){
        
        return(
            <main>
                <div className='navbar'>
                    <Link to='/' ><h1 className="logo"> FlyaKite</h1></Link>
                    <div className="navbar-options">
                        <div >{this.renderOptions()}</div>
                        <Link to='/create' className="navbar-button create-event-nb">CREATE EVENT</Link>
                    </div>
                </div>
                <div className="wrapper">
                    <SideBarContainer />
                    <Switch>
                        <Route exact path="/events/:eventId" component={ShowPageContainer} />
                        <ProtectedRoute exact path="/events/:eventId/edit" component={CreateEventContainer} />
                        <ProtectedRoute exact path="/create" component={CreateEventContainer } />
                        <Route exact path='/' component={EventListContainer} />
                    </Switch>
                </div>
            </main>
        );
    }
 
    renderOptions(){
        return (this.props.currentUser ? 
                <LoggedInOptions
                    logout={this.props.logout}
                    showProfile={this.props.showProfile}
                    toggleProfile={this.props.toggleProfile}
                    username={this.props.currentUser.username}
                />
            :
                <LoggedOutOptions
                    login={this.props.login}
                    showForm={this.props.showLogin}
                    toggleLogin={this.props.toggleForm}
                    errors={this.props.errors}
                    clearSessionErrors={this.props.clearSessionErrors}

                />
        );
    }

}

export default Navbar;


const LoggedInOptions = ({ logout, toggleProfile, showProfile, username }) => {

    let modal = showProfile === true ? <ProfileDropDown /> : null;   
    return (
            <ul className='nav-buttons'>
            <li className='navbar-button' >Welcome, {username}!</li>
                <li><button className='navbar-button' onClick={logout}>LOGOUT</button></li>
                <li><button className='navbar-button' onClick={toggleProfile}> PROFILE</button></li>
                {modal}
            </ul>
        );

};

const LoggedOutOptions = ({ login, toggleLogin, showForm, errors, clearSessionErrors }) => {
    
    const poppedUp = ()=>(
        <LoginDropDown login={login} toggleLogin={toggleLogin} errors={errors} clearSessionErrors={clearSessionErrors} />
    );
    const PoppedOut = ()=>(
        null
    );
    let modal = showForm === true ? poppedUp : PoppedOut;
        return (
            <ul className='nav-buttons'>
                {modal()}
                <li><button className='navbar-button' onClick={toggleLogin}> LOGIN</button></li>
                
                <li><Link to='/signUp' className='navbar-button'> SIGNUP</Link></li>
            </ul>
        );
};

