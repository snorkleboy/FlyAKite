import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventListItem = ( {event}) =>{
    return(
        <li className='event-list-item-li'>
            <div className='event-image-container'>
                <img className='event-list-item-image-c' src={event.imgURL} />
                
            </div>
            <span className='image-buttons-holder'>&X &X &X</span>
            <div className='event-list-item-header-c'>
               
                {event.name}
            </div>
        </li>
    );
};

export default EventListItem;