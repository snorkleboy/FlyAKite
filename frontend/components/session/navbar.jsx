import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profile_drop_down';
import LoginDropDown from './login_drop_down';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
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
            <li>Hello ,{username}!</li>
                <li><button onClick={logout}>logout</button></li>
                <li><button onClick={toggleProfile}> Profile</button></li>
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
                <li><button onClick={toggleLogin}> login</button></li>
                {modal()}
                <li><Link to='/signUp'> SignUp</Link></li>
            </ul>
        );
};

