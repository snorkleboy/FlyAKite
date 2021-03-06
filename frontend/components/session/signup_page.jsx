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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn) {
            const redirectedFrom = this.props.location.state ? this.props.location.state.redirectedFrom : false;
            if (redirectedFrom){ 
                this.props.history.push(redirectedFrom);
            }else{
                this.props.history.push('/');
            }
        }
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
//unredirect
//redirectedFrom
    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.signup({ user });
    }
    
    handleDemoLogin(e){
        e.preventDefault();
        this.props.loginGuest();
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
    componentDidMount() {
        if(this.props.errors.length>0)  this.props.clearSessionErrors();
        this.props.closeAll();
    }
    render() {
        return (         
            <main className='signup-page'>             
                <div className="signup-form-container">
                    <Link className='signup-close' to='/'>&#x274c; </Link>

                    <div className='splash-text'>
                        <h1>FlyaKite</h1>
                        <div className="signup-line2"></div>

                        <div className="signup-line3"></div>
                    </div>               
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <br />
                        <div className="signup-form">
                            <h3 className='getstarted'>Get Started</h3> 
                            <label className='signup-label'>Username
                            <br />
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label className='signup-label'>Password
                            <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <div className='button-holder'>
                                <input className='signup-button' type="submit" value="Signup" />
                                <button className='signup-button' onClick={this.handleDemoLogin}>Guest</button>                                  
                            </div>
                        {this.renderErrors()}
                        </div>                     
                    </form>
                </div>
            </main>
        );
    }
}

export default SignUpPage;

