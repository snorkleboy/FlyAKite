import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ShowPage extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
        // this.props.GetEvent();
    }

    render(){
        // console.log(this.props);
       return( 
       <ul>
       event
            {this.props.event ? this.props.event.name : null}
       </ul>)
    }



    componentDidMount() {
        // if (!event){
            console.log(this.props.getEvent);
            this.props.getEvent(this.props.match.params.eventId);
        // }    
    }
}

export default ShowPage;