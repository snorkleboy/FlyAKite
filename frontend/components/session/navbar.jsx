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
        if (this.props.currentUser){
            return (
                <div>
                  Hello ,{this.props.currentUser.username}!
                  <LoggedInOptions
                   logout={this.props.logout}
                   showProfile={this.props.showProfile}
                    toggleProfile={this.props.toggleProfile}
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

                     />
                </div>
            ); 
        }
      
    }

}

export default Navbar;


const LoggedInOptions = ({ logout, toggleProfile, showProfile }) => {

    if (showProfile === true) {
        return (
            <ul>
                <li><button onClick={logout}>logout</button></li>
                <li><button onClick={toggleProfile}> Profile</button>
                    <ProfileDropDown /></li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li><button onClick={logout}>logout</button></li>
                <li><button onClick={toggleProfile}> Profile</button></li>
            </ul>
        );
    }
};

const LoggedOutOptions = ({ login, toggleLogin, showForm, errors }) => {
    console.log(showForm);
    if (showForm === true) {
        return (
            <ul>
                <li><button onClick={toggleLogin}> login</button>
                    <LoginDropDown login={login} errors={errors}/></li>
                <li><Link to='/signUp'> SignUp</Link></li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li><button onClick={toggleLogin}> login</button></li>
                <li><Link to='/signUp'> SignUp</Link></li>
            </ul>
        );
    }

};

