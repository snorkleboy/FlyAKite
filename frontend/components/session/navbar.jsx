import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        if (this.props.currentUser){
          var username = this.props.currentUser.username;
        }else{
             username = "not logged in";
        }
       return(
            <div>
               {username}
            </div>       
       );
    }

}

export default Navbar;

const LoggedInOptions = () => (
    <div>
        <button onClick={this.props.login}>logout</button>
        <button >ProfileDropDown</button>
    </div>
);

const LoggedOutOptions = () =>{
    <div>
        <button onClick={this.props.logout}>login</button>
        <button >ProfileDropDown</button>
    </div>
};
// if logged in display a logout button and profile button
// if not logged in display a login button and a signup link
/*  <NavLink
    to="/faq"
    activeClassName="selected"
>FAQs</NavLink> 



class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
} */