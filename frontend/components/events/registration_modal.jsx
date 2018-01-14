import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';
import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';
import EventListItem from './event_list_item.jsx';
class RegistrationModal extends React.Component {

    constructor(props) {
        super(props);
        this.openStripe = this.openStripe.bind(this);
    }

    componentDidMount(){
        let Skey = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
        if ( this.props.event.stripeKey &&  this.props.event.stripeKey !== ""){
            Skey = this.props.event.stripeKey;
        }
        let handleToken = function (token) {
            // console.log(token);
            this.props.register().then((suc)=> this.props.close());
        };
        handleToken = handleToken.bind(this);

        this.handler = StripeCheckout.configure({
            key: Skey,
            image: this.props.event.imgURL,
            locale: 'auto',
            token: handleToken
        });


        // Close Checkout on page navigation:
        window.addEventListener('popstate', function () {
            if (this.handler) this.handler.close();

            
        });
        // const clickClose = function (evpexcept the modal itself or the "open modal" link, close the modal
        //     if (!$(event.target).closest("registration-modal").length) {
        //         this.props.close();
        //     }
        // }
        // document.addEventListener('click', clickClose.bind(this));


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
                <button onClick={this.openStripe.bind(this)} className='navbar-button create-event-nb' id="stripe">pay with Stripe</button>
            );
        }else{
            <button className='navbar-button create-event-nb' onClick={this.props.register} >Free </button>
        }
    }
    render(){
        return(
            <main id='registration-modal' className='registration-modal'>
                <img className='registration-image' src={setCloudinaryOptions(this.props.event.imgURL,'q_60')} />
                <div className='registration-header'>

                    <span className='header-date-el'>{this.props.event.location.city}</span>
                    <span className='header-name-el'>{this.props.event.name}</span>
                    <span className='header-location-el'>${this.props.event.price / 100} {this.props.event.startDate.slice(0, 10)}</span>
                    <span className='header-name-el'></span>
                </div>
                <div className='reg-buttons'>
                {this.conditionalStripe()}
                    <br></br>
                    <button className='navbar-button create-event-nb' onClick={this.props.close} >Close</button>
                    <br ></br>
                    <button className='navbar-button create-event-nb' onClick={this.props.register} >Demo (Register) </button>
                </div>
            </main>
        );
    }
}

export default RegistrationModal;

