import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';
const EventListItem = ({ event, registrationHandler, registered, bookmarkHandler, bookmarked}) =>{
    const imgURL = setCloudinaryOptions(event.imgURL, 'q_60')
    return(
        <li className='event-list-item-li'> 
            <div className='event-image-container'>
                <Link to={`/events/${event.id}`} >
                    <img className='event-list-item-image-c' src={imgURL} />
                </Link>
                <div className='BOOKMARK'>
                    <button
                        className={(bookmarked ? 'un' : '') + 'bookmark-button' + ' floatbutton'}
                        onClick={bookmarkHandler}
                    >
                        <i className={"fa fa-bookmark" + (!bookmarked ? '-o' : '')}></i>
                    </button>
                </div>
            </div> 
            
            <div className='event-list-item-header-c'>
                
                <span className='header-date-el'>{event.location.city}</span> 
                <span className='header-name-el'>{event.name}</span> 
                <span className='header-location-el'>{event.price>0? `$${event.price/100}` : "free"} {event.startDate.slice(0, 10)}</span>
                <span className='header-name-el'></span>
            </div>
        </li>
    );
};

export default EventListItem;