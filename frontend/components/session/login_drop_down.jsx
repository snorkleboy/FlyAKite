import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginDropDown extends React.Component {
    constructor(props) {
        super(props);
        console.log(`dropdown received:`);
        console.log(props)
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn) {
            
        }
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


    render() {
        return (
            <div className="login-form-container login-modal">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginDropDown;