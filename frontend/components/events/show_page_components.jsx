import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Map from '../map';


export const EventImage = ({image}) => {
    return (
        <div className='showImage'>
            <img src={image} alt='no image loaded' />  
        </div>
    );
};

export const EventHeader = ({date, header, name}) => {
    return (
        <div className='showHeader'>
            <h2>{date.slice(0,10)}</h2>
            <h1> {name}</h1>
            <p>{header}</p>
            
        </div>

        
    );
};

export const EventDiscription = ({event}) => {
    return (
        <div className='description'>

            <div className='show-header-desc'>
            <span className='header-name'>DESCRIPTION</span> 
            <p>{event.description}</p>
            </div>


            <div className='datelocation'>             
                
                <div className='show-date'><h1>DATES</h1>
                    <span>{event.startDate.slice(0,10)}</span> 
                    <br></br>
                    <span>{event.endDate? event.endDate.slice(0, 10) : ''}</span> 
                </div>
                <div className='show-location'><h1>LOCATION</h1>
                    <span>{event.location.city}</span>
                    <br></br>
                    <span>{event.location.areaCode}</span>
                    <br></br>
                    <span>{event.location.state}</span>
                </div>
                <Map location={{ areaCode: event.location.areaCode, city: event.location.city, state: event.location.state }}/>
            </div>
        </div>
        
    );
};