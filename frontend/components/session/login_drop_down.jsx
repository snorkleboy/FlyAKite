import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginDropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.login({ user });
    }
    renderErrors() {

        if (this.props.errors.length > 0) {
            return (
                <ul className='error-list'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error.slice(2, error.length - 2)}
                        </li>
                    ))}
                </ul>
            );
        }
    }
    componentWillMount(){
        if (this.props.errors.length > 1)
        this.props.clearSessionErrors();
    }
    render() {
        return (
            <div className="login-form-container login-modal">
                <form id="loginForm" className='login-form' onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        
                        Username
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        
                        <br />
                        Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        
                        <br />
                        <input className='login-submit' type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginDropDown;