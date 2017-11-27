import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';
import {SelectEventsInOrder} from '../../reducers/selectors/selectors.js';


class EventList extends React.Component{
    constructor(props){
        super(props);

    }


    arrToObj(arr){
        return arr.reduce(function (result, item, index, array) {
            result[index] = item; 
            return result;
        }, {});
    }
    componentDidMount() {

        // const categoryList = this.arrToObj(this.props.categories.order);
        // const eventList = this.arrToObj(this.props.events.order);
        // if (!this.props.events.indexLoaded) this.props.getIndexDiff({categoryList: [1,2,3], eventList: [2,3,4]});
        if (!this.props.events.indexLoaded) this.props.getIndex();

    }
    render(){

        const orderedEvents = SelectEventsInOrder(this.props.events);
        return(
            <main className='eventlist'>
                <div className='navbar-img-container'>
                    {/* <img className='navbar-img'
                        alt='woopsie doopsie' /> */}
                </div>
                <div className="eventList-container">

                    <div className="eventListItem-container"> 
                        <ul className='event-list-ul'>
                            {orderedEvents.map ( (event, index) => (
                        
                                <div key={`eventlistitemdiv-${index}`} className='event-item-anchor'>
                                    <EventListItem key={`eventlistitem-${index}`} event={event}/>
                    
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