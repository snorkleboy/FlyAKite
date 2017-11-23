import React from 'react';

import ClearSessionErrors from '../../actions/session_actions.js';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profile_drop_down';
import LoginDropDown from './login_drop_down';

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
    
    render(){
        
        return(
            <main>
                <div className='navbar'>
                    <h1 className="logo"> FlyAKite</h1>
                    <div className="navbar-options">{this.renderOptions()}</div>
                </div>
                <div className='navbar-img-container'>
                    <img className='navbar-img'
                            src='https://prismkites.com/wp-content/uploads/2016/03/prism-kites-stowaway-diamond-p1-flying-sky.jpg'
                    alt='woopsie doopsie' />
                </div>
            </main>
        );
    }
    componentDidMount() {
    }
    renderOptions(){
        if (this.props.currentUser){
            return (
                <div>
                  <LoggedInOptions
                   logout={this.props.logout}
                   showProfile={this.props.showProfile}
                    toggleProfile={this.props.toggleProfile}
                    username={this.props.currentUser.username}
                   />
                </div>
          );
        }else{
            return (
                <div>
                    <LoggedOutOptions
                        login={this.props.login}
                        showForm={this.props.showLogin}
                        toggleLogin={this.props.toggleForm}
                        errors={this.props.errors}
                        clearSessionErrors={this.props.clearSessionErrors}

                     />
                </div>
            ); 
        }
      
    }

}

export default Navbar;


const LoggedInOptions = ({ logout, toggleProfile, showProfile, username }) => {

    let modal = showProfile === true ? <ProfileDropDown /> : null;   
    return (
            <ul className='nav-buttons'>
                <li className='current-user-greet' >Welcome, {username}!</li>
                <li><button className='navbar-button' onClick={logout}>Logout</button></li>
                <li><button className='navbar-button' onClick={toggleProfile}> Profile</button></li>
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
                <li><button className='navbar-button' onClick={toggleLogin}> Login</button></li>
                
                <li><Link to='/signUp' className='navbar-button annoying'> SignUp</Link></li>
            </ul>
        );
};

