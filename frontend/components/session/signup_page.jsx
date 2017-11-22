import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class SignUpPage extends React.Component {
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
            this.props.history.push('/');
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
        this.props.signup({ user });
    }

    renderErrors(){

        if (this.props.errors.length > 0){
            return (
                <ul className='error-list'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error.slice(2,error.length-2)}
                        </li>
                    ))}
                </ul>
            );
        }
    }


    render() {
        return (
            <main className='signup-page'>
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h1>FlyAKite</h1>
                        <br />
                       <h3> Sign up</h3>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
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
            </main>
        );
    }
}

export default (SignUpPage);



// renderErrors() {
//     return (

//     );
// }