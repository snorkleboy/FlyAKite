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
                        let event = this.props.events.byIDs[eventID]
                        return (                        
                         <Link className='event-item-anchor' to={`/events/${eventID}`} > 
                             <EventListItem key={index + eventID} event={event}/>
                         </Link>
                        );
                    })}
                    </ul>
                </div>

            
            </div>
        );
    }


}


export default EventList;