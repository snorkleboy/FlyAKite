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

    render() {
        return (
            <div className="login-form-container login-modal">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        {this.renderErrors()}
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