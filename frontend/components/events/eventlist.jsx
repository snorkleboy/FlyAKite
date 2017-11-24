import React from 'react';
import {link, withRouter} from 'react-router-dom';
import eventListItem from './event_list_item.jsx';
class EventList extends React.Component{


    componentWillMount() {
        this.props.receiveAllEvents();
    }
    render(){
        return(
            <div className="eventList-container">
            
                <div className="eventListItem-container"> 
                    <eventListItem />
                
                </div>

            
            </div>
        );
    }


}


export default EventList;