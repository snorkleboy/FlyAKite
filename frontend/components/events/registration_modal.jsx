import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';
import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';

class RegistrationModal extends React.Component {

    constructor(props) {
        super(props);
        this.openStripe = this.openStripe.bind(this);
    }

    componentDidMount(){
        this.handler = StripeCheckout.configure({
            key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
            image: this.props.event.imgURL,
            locale: 'auto',
            token: function (token) {
                console.log(token);
            }
        });


        // Close Checkout on page navigation:
        window.addEventListener('popstate', function () {
            this.handler.close();
        });
    }
    openStripe(e){
            // Open Checkout with further options:
            this.handler.open({
                name: this.props.event.name,
                description: this.props.event.header,
                zipCode: true,
                amount: this.props.event.price || 2000
            });
            e.preventDefault();

    }
    conditionalStripe(){
        if (this.props.event.price>0){
            return (
                <button onClick={this.openStripe.bind(this)} id="stripe">pay</button>
            );
        }
    }
    render(){
        return(
            <main id='registrationModel' className='registration-modal'>
                <h1> I AM A MODAL</h1>
                {this.conditionalStripe()}
                <br></br>
                <button onClick={this.props.close} >close </button>
                <br ></br>
                <button onClick={this.props.register} >Free Register </button>
            </main>
        );
    }
}

export default RegistrationModal;

