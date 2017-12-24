import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ShowPageComponents from './show_page_components.jsx';
import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';

class RegistrationModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <main className='registration-modal'>
                <h1> I AM A MODAL</h1>

                <button onClick={this.props.close} >close </button>
                <button onClick={this.props.register} >register </button>
            </main>
        );
    }
}

export default RegistrationModal;
