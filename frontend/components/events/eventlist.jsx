import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import EventListItem from './event_list_item.jsx';
// import {SelectEventsInOrder} from '../../reducers/selectors/selectors.js';
// import * as Sorts from '../../reducers/selectors/sorts';


class EventList extends React.Component{
    constructor(props){
        super(props);

    }


    componentDidMount() {
        if (!this.props.events.indexLoaded) this.props.GetAllEvents() //.then(()=> sort);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.events.sortType !== nextProps.events.sortType){
            // console.log(nextProps.location);
            // console.log(nextProps.match);
            console.log("sortType change");
        }

    }


    render(){

        // const orderedEvents = Sorts.sortByCategory(this.props.events, 1);
        // const orderedEvents = this.props.eventList;
        return(
            <main className='eventlist'>
                <div className='navbar-img-container'>
                    {/* <img className='navbar-img'
                        alt='woopsie doopsie' /> */}
                </div>
                <div className="eventList-container">

                    <div className="eventListItem-container"> 




                    <h1> {this.props.events.sortType}</h1>






                        <ul className='event-list-ul'>
                            {this.props.eventsList.map ( (event, index) => (
                        
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