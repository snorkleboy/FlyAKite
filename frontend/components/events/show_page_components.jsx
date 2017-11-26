import React from 'react';
import { Link, withRouter } from 'react-router-dom';



export const EventImage = ({image}) => {
    console.log(image);
    return (
        <div className='showImage'>
            <img src={image} alt='no image loaded' />  
        </div>
    );
};

export const EventHeader = ({header}) => {
    console.log(header);
    return (
        <div className='showHeader'>
            {header}
        </div>

        
    );
};
export const EventDiscription = ({description}) => {
    return (
        <div className='description'>
            <h1>{description}</h1>
        </div>
        
    );
};