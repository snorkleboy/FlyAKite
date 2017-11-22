import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profile_drop_down';
import LoginDropDown from './login_drop_down';

class Navbar extends React.Component{
    constructor(props){
        super(props);



        this.toggleProfile = this.toggleProfile.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.state={showForm: false, showProfile: false};
    }


    render(){
        if (this.props.currentUser){
            return (
                <div>
                  Hello ,{this.props.currentUser.username}!
                  <LoggedInOptions
                   logout={this.props.logout}
                   showProfile={this.state.showProfile}
                    toggleProfile={this.toggleProfile}
                   />
                </div>
          );
        }else{
            return (
                <div>
                    <LoggedOutOptions
                        login={this.props.login}
                        showForm={this.state.showForm}
                        toggleLogin={this.toggleLogin}

                     />
                </div>
            ); 
        }
      
    }

    toggleProfile(){
        let newState= Object.assign({}, this.state);
        newState.showProfile = !newState.showProfile;
        this.setState(newState);
    }
    toggleLogin(){
        let newState = Object.assign({}, this.state);
        newState.showForm = !newState.showForm  ;
        console.log(newState);
        this.setState(newState);
        this.forceUpdate();
        console.log(this.state);
    }
}

export default Navbar;

const LoggedInOptions = ({ logout, toggleProfile, showProfile}) => {

    if (showProfile === true){
        return(
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

const LoggedOutOptions = ({ login, toggleLogin, showForm}) =>{
    
    if (showForm === true){
        return(
                <ul>
                <li><button onClick={toggleLogin}> login</button>
                    <LoginDropDown login={login} /></li>
                <li><Link to='/signUp'> SignUp</Link></li>
                </ul>
        );
    } else{
        return (
            <ul>
                <li><button onClick={toggleLogin}> login</button></li>
                <li><Link to='/signUp'> SignUp</Link></li>
            </ul>
        );
    }
    
};
