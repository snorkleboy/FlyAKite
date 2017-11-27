import React from 'react';
import { Link, withRouter } from 'react-router-dom';
////

//from state: 
///t.integer "userId", null: false
///
// t.string "name", null: false
// t.datetime "startDate", null: false
// t.text "header", null: false
// t.text "description", null: false
// t.text "imgURL", null: false
// t.integer "areaCode", null: false
//////optional
// t.string "state"
// t.string "city"
// t.datetime "endDate"
////
//uneeded but in schema 
// t.index["userId"], name: "index_events_on_userId"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
////

// yyyy - MM - ddThh: mm

class CreateEventComp extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        if (this.props.errors.length > 0)  this.props.clearEventErrors();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.errors[0] === "success") {
            // setTimeout({....}, 1s)
            this.props.clearEventErrors();
            this.props.history.push(`/events/${nextProps.errors[1]}`);
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = this.state;
        this.props.actionType({ event });
        
    }
    renderErrors() {

        if (this.props.errors.length > 0) {
            console.log(this.props.errors);
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
                <h1>this is a header</h1>
                <h1>create event</h1>
            </div>
        );
    }
    renderForm(){
        return(
            <form onSubmit={this.handleSubmit} className="EventForm">
                
                <div className="create-form">
                    <h3 className='getstarted'>Get Started</h3>
                    {this.renderErrors()}

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
                    <label className='signup-label'>cloudinary widget
                                <br />
                        <input type="text"
                            value={this.state.imgURL}
                            onChange={this.update('imgURL')}
                            className="signup-input"
                            required
                            
                        />
                    </label>

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

                    <label className='signup-label'>Location
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
                        <label> city (optional)
                            <input type="text"
                                value={this.state.city}
                                onChange={this.update('city')}
                                className="signup-input"
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
                        <input className='signup-button' type="submit" value="Signup" />
                    </div>
                </div>
                
            </form>
        );
    }
}
export default CreateEventComp;

        // this.state = {
        //     name: '',
        //     startDate: '',
        //     header:"",
        //     description:"",
        //     imgURL:"",
        //     areaCode:415,
        //     state:"CA",
        //     city:"San Fransisco",
        //     endDate:"",
        // };