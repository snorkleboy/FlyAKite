import React from 'react';
import {link, withRouter} from 'react-router-dom';
import eventListItem from './event_list_item.jsx';

class EventList extends React.Component{
    constructor(props){
        super(props);
    }

    // componentWillReceiveProps(nextProps) {
    //     if () {
    //         ;
    //     }
    // }

    componentDidMount() {
        this.props.GetAllEvents();
    }
    render(){
        return(
            <div className="eventList-container">
            <h1> something</h1>
                <div className="eventListItem-container"> 
                    <ul>
                    {this.props.events.order.map((eventID, index) => {
                        let event = this.props.events.byIDs[eventID];
                        const eventName=event.name;
                        console.log(this.props.events.byIDs);
                        console.log(eventID);
                        console.log(event);
                        console.log("____");
                        return (
                            
                            <eventListItem key={index + eventID} event={event}/>
                            
                        );
                    })}
                    </ul>
                </div>

            
            </div>
        );
    }


}


export default EventList;