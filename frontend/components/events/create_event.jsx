import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SelectEntityInOrder } from '../../reducers/selectors/selectors';
import merge from 'lodash/merge';

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
// t.datetime "created_at", null: falserenderForm
// t.datetime "updated_at", null: false
////

// yyyy - MM - ddThh: mm

class CreateEventComp extends React.Component {
    constructor(props) {
        super(props);
        const event = props.event;
        console.log("props");
        // renderForm
        this.state = props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        if (this.props.formType === 'edit' && this.props.event.name === '') {
            this.props.GetEvent(this.props.match.params.eventId);
        }
        window.scrollTo(0, 0);
        if (this.props.errors.length > 0)  this.props.clearEventErrors();
    }
    componentWillReceiveProps(nextProps) {
        console.log("event nexrprops", event);
        if( nextProps.event){
            const event = nextProps.event;
            
            //convert from database datetime to this datetime-local
            event.startDate = event.startDate.slice(0, -2);
            event.endDate = event.startDate.slice(0, -2);
            this.setState(event);
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
        this.props.clearEventErrors();
        console.log("event", event);

        let successCB = (success) => {
            let key = Object.keys(success.byIDs)[0];
            this.props.history.push(`/events/${key}`);
        };

        successCB = successCB.bind(this);
        this.props.actionType({ event }, successCB);

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
            
        // console.log(this.state);



        return(
            <form onSubmit={this.handleSubmit} className="EventForm">
                
                <div className="create-form">
                    <h3 className='getstarted'>Details</h3>
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
                
            </form>
        );
    }
}
export default CreateEventComp;

const _event = {
    // userId: this.props.userId,
    name: '',
    startDate: '',
    header: "",
    categoryId:1,
    description: "",
    imgURL: "",
    areaCode: "415",
    state: "CA",
    city: "San Fransisco",
    endDate: "",
};
const _eeevent = {
    // userId: 1,
    categoryId:1,
    name: 'asdasd',
    startDate: '2015-01-02T11:42:00',
    header: "asdasdsasada",
    description: "asdasadas",
    imgURL: "https://previews.123rf.com/images/ayzek/ayzek1105/ayzek110500057/9549034-Bridge-to-the-sucess--Stock-Photo.jpg",
    areaCode: "415",
    state: "CA",
    city: "San Fransisco",
    endDate: "",
};
