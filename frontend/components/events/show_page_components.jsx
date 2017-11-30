import React from 'react';
import { Link, withRouter } from 'react-router-dom';



export const EventImage = ({image}) => {
    return (
        <div className='showImage'>
            <img src={image} alt='no image loaded' />  
        </div>
    );
};

export const EventHeader = ({header, name}) => {
    return (
        <div className='showHeader'>
            <p>{header}</p>
            <h1> {name}</h1>
        </div>

        
    );
};
export const EventDiscription = ({event}) => {
    return (
        <div className='description'>

            <div className='show-header-desc'>
            <span className='header-name'>{event.name}</span> 
            <p>{event.description}</p>
            </div>


            <div className='datelocation'>             
                
                <div>
                    <span>{event.startDate.slice(0,10)}</span> 
                    <br></br>
                    <span>{event.endDate.slice(0, 10)}</span> 
                </div>
                <div>
                    <span>{event.location.city}</span>
                    <br></br>
                    <span>{event.location.areaCode}</span>
                    <br></br>
                    <span>{event.location.state}</span>
                </div>
            </div>
        </div>
        
    );
};