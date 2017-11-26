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

class CreateEventComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: '',
            header:"",
            description:"",
            imgURL:"",
            areaCode:415,
            state:"CA",
            city:"San Fransisco",
            endDate:""
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
        const event = this.state;
        this.props.createEvent({ event });
        
    }
  

    render(){

        return(   
                <h1>hello</h1>
        );
    }

}
export default CreateEventComp;