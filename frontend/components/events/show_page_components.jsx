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



const mapCenter = { lat: 37.7758, lng: -122.435 };

// I made some lat/lng points for some good burrito spots
const burritos = [
  { lat: 37.775785, lng: -122.445979, name: "Papalote" },
  { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
  { lat: 37.781899, lng: -122.410426, name: "Cancun" }
];


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
                    <span>{event.city}</span>
                    <br></br>
                    <span>{event.areaCode}</span>
                    <br></br>
                    <span>{event.state}</span>
                </div>
                <Map center={mapCenter} burritoPlaces={burritos} />
            </div>
        </div>
        
    );
};