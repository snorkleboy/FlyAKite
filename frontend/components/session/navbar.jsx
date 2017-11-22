import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profile_drop_down';
import LoginDropDown from './login_drop_down';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        console.log(`navbar recieved: `);
        console.log(props);

        this.login=this.props.login.bind(this);
        this.logout=this.props.logout.bind(this);
        this.State={showForm: true, showProfile: true};
    }

    render(){
        if (this.props.currentUser){
            return (
                <div>
                  Hello ,{this.props.currentUser.username}!
                  <LoggedInOptions
                   logout={this.props.logout}
                   />
                </div>
          );
        }else{
            return (
                <div>
                    <LoggedOutOptions
                        login={this.props.login}
                        showForm={true}
                     />
                </div>
            ); 
        }
      
    }

}

export default Navbar;

const LoggedInOptions = ({logout}) => {

    let showProfile=true;
    if (showProfile === true){
        return(
            <ul>
                <li><button onClick={logout}>logout</button></li>
                <li><button> Profile</button>
                <ProfileDropDown /></li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li><button onClick={logout}>logout</button></li>
                    <li><button> Profile</button></li>
            </ul>
        );
    }
};

const LoggedOutOptions = ({login}) =>{
    let showForm = true;
    if (showForm === true){
        return(
                <ul>
                    <li><button> login</button>
                    <LoginDropDown login={login} /></li>
                <li><Link to='/signUp'> SignUp</Link></li>
                </ul>
        );
    } else{
        return (
            <ul>
                <li><button> login</button></li>
                <li><Link to='/signUp'> SignUp</Link></li>
            </ul>
        );
    }
    
};
