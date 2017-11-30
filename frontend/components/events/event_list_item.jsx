import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventListItem = ({ event, registrationHandler, registered, bookmarkHandler, bookmarked}) =>{
    console.log("eventlistItem", event);
    return(
        <li className='event-list-item-li'> 
            <div className='event-image-container'>
            <Link to={`/events/${event.id}`} >
                <img className='event-list-item-image-c' src={event.imgURL} />
            
            </Link>
            </div> 
            <span className='image-buttons-holder'>
                <button className={(registered ? 'un' : "") + `register-button`} onClick={registrationHandler}>Register<i className={"fa fa-caret-square-o" + (registered ? '-down' : '-up')}></i> </button>
                <button className={(bookmarked ? 'un' : '') + 'bookmark-button'} onClick={bookmarkHandler}>Bookmark<i className={"fa fa-bookmark" + (bookmarked ? '-o' : '') }></i>  </button>
            </span>
            <div className='event-list-item-header-c'>
               
                <span className='header-name-el'>{event.name}</span> 
                <span className='header-header'>{event.header}</span> 
                <span>{event.startDate.slice(0,10)}</span> 
                <span>{event.location.city}</span>

            </div>
        </li>
    );
};

export default EventListItem;