import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventListItem = ( {event}) =>{
    // debugger;
    console.log(Object.values(event));
    return(
        <li>{event.name }</li>
    );
};

export default EventListItem;