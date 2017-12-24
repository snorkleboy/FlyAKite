import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Map from '../map';


export const EventImage = ({image, event}) => {
    return (
        <div className='showImage'>
            <img src={image} alt='no image loaded' />  
        </div>
    );
};


export const EventHeader = ({ location, date, header, name }) => {
    return (
        <div className='showHeader'>
            <h1> {name}</h1>
            <h2>{date.slice(0, 10)}</h2>

        </div>


    );
};
export const EventDiscription = ({event}) => {
    return (
        <div className='description'>
            <Map location={{ areaCode: event.location.areaCode, city: event.location.city, state: event.location.state }} />
            <div className='showHeader-flex'>
                <div>
                    <div className='show-header-desc'>


                        <p>{event.description}</p>
                        <div className='showHeader'>
                            <h1> {event.name}</h1>
                            <p>{event.header}</p>
                        </div>
                    </div>
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
                </div>
                
            </div>
            
        </div>
        
    );
};