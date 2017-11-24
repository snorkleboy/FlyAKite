import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const eventListItem = ( {event}) =>{
    console.log('hello?');
    return(
        <li>{event.map((prop, index) => <h1 key={index}> {prop}</h1> )}</li>
    );
};

export default eventListItem;