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
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
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
                name: 'Stripe.com',
                description: '2 widgets',
                zipCode: true,
                amount: 2000
            });
            e.preventDefault();

    }
    render(){
        return(
            <main id='registrationModel' className='registration-modal'>
                <h1> I AM A MODAL</h1>
                <button onClick={this.openStripe.bind(this)} id="stripe">registerSTRIPE</button>
                <br></br>
                <button onClick={this.props.close} >close </button>
                <br ></br>
                <button onClick={this.props.register} >register </button>
            </main>
        );
    }
}

export default RegistrationModal;

