import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';

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
                <div className="eventListItem-container"> 
                    <ul className='event-list-ul'>
                    {this.props.events.order.map((eventID, index) => {
                        let event = this.props.events.byIDs[eventID];
                        return (                        
                            <div className='event-item-anchor'>
                             <EventListItem key={index + eventID} event={event}/>
                   
                            </div>
                        );
                    })}
                    </ul>
                </div>

            
            </div>
        );
    }


}


export default EventList;