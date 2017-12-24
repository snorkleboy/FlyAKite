import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import setCloudinaryOptions from '../../util/cloudinaryOptionsSetter';
const EventListItem = ({ event, registrationHandler, registered, bookmarkHandler, bookmarked}) =>{
    const imgURL = setCloudinaryOptions(event.imgURL, 'w_375,h_220,c_fill,q_60')
    return(
        <li className='event-list-item-li'> 
            <div className='event-image-container'>
                <Link to={`/events/${event.id}`} >
                    <img className='event-list-item-image-c' src={imgURL} />
                </Link>
            </div> 
            <div  className='BOOKMARK'>
                <button
                    className={(bookmarked ? 'un' : '') + 'bookmark-button' + ' floatbutton'}
                    onClick={bookmarkHandler}
                >
                    <i className={"fa fa-bookmark" + (!bookmarked ? '-o' : '')}></i>
                </button>
            </div>
            <div className='event-list-item-header-c'>

                <span className='header-date-el'>{event.startDate.slice(0, 10)}</span> 
                <span className='header-name-el'>{event.name}</span> 
                <span className='header-location-el'>{event.location.city}</span>
            </div>
        </li>
    );
};

export default EventListItem;