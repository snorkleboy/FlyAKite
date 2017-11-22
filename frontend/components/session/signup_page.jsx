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

    componentWillMount() {
        this.props.clearSessionErrors();
    }
    render() {
        return (
            
            <main className='signup-page'>  
                <img className='signup-splash-img' src='https://www.goodfreephotos.com/albums/other-photos/kite-in-the-blue-sky.jpg' alt='woopsie doopsie' />

                <div className="signup-form-container">
                    <div className='splash-text'>
                        <h2> make friends</h2>
                        <h2> get outdoors</h2>
                        <h1>FlyAKite</h1>
                    </div>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        
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
                            <Link className='exit-modal' to='/'>cancel   </Link>     <input className='signup-submit' type="submit" value="Signup" />
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