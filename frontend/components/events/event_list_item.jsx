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
            </div> 
            <span className='image-buttons-holder'>
                <button className={(bookmarked ? 'un' : '') + 'bookmark-button'} onClick={bookmarkHandler}><i className={"fa fa-bookmark" + (bookmarked ? '-o' : '')}></i>bookmark{bookmarked ? 'ed' : ''}  </button>
            </span>
            <div className='event-list-item-header-c'>
                <span className='header-date-el'>{event.startDate.slice(0, 10)}</span> 
                <span className='header-name-el'>{event.name}</span> 
                <span className='header-location-el'>{event.location.city}</span>

                

            </div>
        </li>
    );
};

export default EventListItem;