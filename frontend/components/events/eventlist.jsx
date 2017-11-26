import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';
import {SelectEventsInOrder} from '../../reducers/selectors/selectors.js';


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

        const orderedEvents = SelectEventsInOrder(this.props.events)
        return(
            <main>
                <div className='navbar-img-container'>
                    {/* <img className='navbar-img'
                        alt='woopsie doopsie' /> */}
                </div>
                <div className="eventList-container">

                    <div className="eventListItem-container"> 
                        <ul className='event-list-ul'>
                            {orderedEvents.map ( (event, index) => (
                        
                                <div className='event-item-anchor'>
                                    <EventListItem key={index*event.id} event={event}/>
                    
                                </div>

                        ))}
                        </ul>
                    </div>

                
                </div>
            </main>
        );
    }


}


export default EventList;