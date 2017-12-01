import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SelectEntityInOrder } from '../../reducers/selectors/selectors';
import merge from 'lodash/merge';



class CreateEventComp extends React.Component {
    constructor(props) {
        super(props);
        // console.log("create eventCON props",props);
        const event = props.event;
        console.log("create eventCON event", event);
        if (event.location){
            event.areaCode = event.location.areaCode || '' ;
            event.city = event.location.city || '';
            event.state= event.location.state || '';
            delete event.location;
        }
        console.log("create eventCON after", event);
        // renderForm

        this.upload = this.upload.bind(this);
        this.state = event  ;
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount(){
        // console.log("didmount",this.props);
        if (this.props.formType === 'edit') {
            this.props.GetEvent(this.props.match.params.eventId);
        }
        window.scrollTo(0, 0);
        if (this.props.errors.length > 0)  this.props.clearEventErrors();
    }
    componentWillReceiveProps(nextProps) {
        console.log("willrecieve",nextProps, this.state);
        if( nextProps.event && this.props.formType !=="create"){
            const event = nextProps.event;
            console.log("nexrprops", nextProps.event);
            if (event.location){
                event.areaCode = event.location.areaCode ? event.location.areaCode : '';
                event.city = event.location.city ? event.location.city : '';
                event.state = event.location.state ? event.location.state : '';
            
            delete event.location;
            }
            // console.log("nexrprops", nextProps.event);
            //convert from database datetime to this datetime-local
            event.startDate = event.startDate.slice(0, -2);
            event.endDate = event.startDate.slice(0, -2);
            this.setState(event);
        }

    }


    handleSubmit(e) {
        e.preventDefault();
        const event = this.state;
        
        console.log("handle submit event&state", event, this.state);

        let successCB = (success) => {
            let key = Object.keys(success.byIDs)[0];
            this.props.history.push(`/events/${key}`);
        };
        event.state && event.state.toUpperCase();
        successCB = successCB.bind(this);
        this.props.actionType(event , successCB);
        this.props.clearEventErrors();
    }
    renderErrors() {

        if (this.props.errors.length > 0) {
            return (
                <ul className='error-list'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error.slice}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render(){
        return (

            <main className='createEvent-page'>
            {this.renderHeader()}
            {this.renderForm()}

            </main>
        );
    }
    renderHeader(){
        return(
            <div>
                <span className='formpage-header'>
                    <h1>{this.props.formType} an Event</h1>
                </span>
            </div>
        );
    }

        update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    upload(e){
        console.log("upload button", e, this);
        e.preventDefault();

        window.cloudinary.openUploadWidget(window.Cloudinary_options, function (error, results) {
            if (!error) {
                console.log("CLOUDIANRY RESULT", results, results[0].url);
                this.setState({ 'imgURL': results[0].url   });

            }
        }.bind(this) );

    }

    


    renderForm(){

        
        const cats = SelectEntityInOrder(this.props.categories);
        const catOptions = [];

        for (let i = 0; i < cats.length;i++){

            catOptions.push(
                <option 
                    key={`${cats[i].id}-categoryselect`} 
                    value={`${cats[i].id}`}
                > 
                    {cats[i].name} 
                </option>
            )

        }
        // location
        // console.log(this.state);



        return(
            <form onSubmit={this.handleSubmit} className="EventForm">
                
                <div className="create-form">
                    <h3 className='getstarted'>Details</h3>
                    
                    {this.renderErrors()}
                    <div className='inputs-holder'>
                    <label className='signup-label'>name
                                <br />
                        <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className="signup-input"
                            required                            
                        />
                    </label>
                    <br />

                        <div className="upload-form"      > 
                           <button onClick={this.upload}    >
                               
                                <i className="fa fa-upload" aria-hidden="true"> <h1 className='upload-form-text'>UPLOAD AN IMAGE</h1></i>
                           </button>
                            </div>
                            

                    <br />
                    <label className='signup-label'>start time
                                <br />
                        <input type="datetime-local"
                            value={this.state.startDate}
                            onChange={this.update('startDate')}
                            className="signup-input"
                            required
                            
                        />


                    </label>
                    <br />
                    <label className='signup-label'>end time (optional)
                                <br />
                        <input type="datetime-local"
                            value={this.state.endDate}
                            onChange={this.update('endDate')}
                            className="signup-input"
                        />


                    </label>
                    
                    <label className='signup-label'>category
                                <br />

                        <select value={this.state.categoryId} onChange={this.update('categoryId')} className="signup-input" required>
                            {catOptions}
                        </select>

                    </label>
                    <br />

                    <label className='signup-label'>header
                                <br />
                        <textarea
                            value={this.state.header}
                            onChange={this.update('header')}
                            className="signup-input"
                            required
                            
                        />
                    </label>

                    <br />


                    <label className='signup-label'>description
                                <br />
                        <textarea
                            value={this.state.description}
                            onChange={this.update('description')}
                            className="signup-input"
                            required
                            
                        />
                    </label>

                    <br />

                    <label className='signup-label location-holder'>Location
                                <br />
                        <label> area code
                            <input type="text"
                                value={this.state.areaCode}
                                onChange={this.update('areaCode')}
                                className="signup-input"
                                maxLength='3'
                                required
                                
                            />
                        </label>
                        <label> city
                            <input type="text"
                                value={this.state.city}
                                onChange={this.update('city')}
                                className="signup-input"
                                required
                            />
                        </label>

                        <label> state (optional)
                            <input type="text"
                                value={this.state.state}
                                onChange={this.update('state')}
                                className="signup-input"
                                maxLength='2'
                            />
                        </label>




                    </label>

                    


                    <div className='button-holder'>
                        <input className='signup-button' type="submit" value={this.props.formType} />
                    </div>
                </div>
            </div>
            </form>
        );
    }
}
export default CreateEventComp;
//



{
    /* <label className='signup-label'>cloudinary widget
                                <br />
    <input type="text"
        value={this.state.imgURL}
        onChange={this.update('imgURL')}
        className="signup-input"
        required

    />
</label> */
}