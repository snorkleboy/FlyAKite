import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventListItem = ({ event, registrationHandler, registered, bookmarkHandler, bookmarked}) =>{
    return(
        <li className='event-list-item-li'> 
            <div className='event-image-container'>
            <Link to={`/events/${event.id}`} >
                <img className='event-list-item-image-c' src={event.imgURL} />
            
            </Link>
            </div>
            <span className='image-buttons-holder'>
                <button className='registrationButton' onClick={registrationHandler}> {registered ? "unregister" : "register"} </button>
                <button className='bookmarksButton' onClick={bookmarkHandler}>{bookmarked? "unbookmark" : "bookmark"}  </button>
            </span>
            <div className='event-list-item-header-c'>
               
                {event.name}
            </div>
        </li>
    );
};

export default EventListItem;