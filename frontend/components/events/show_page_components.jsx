import React from 'react';
import { Link, withRouter } from 'react-router-dom';



export const EventImage = ({image}) => {
    console.log(image);
    return (
        <h1>{image}</h1>
    );
};

export const EventHeader = ({header}) => {
    console.log(header);
    return (
        <h1>{header}</h1>
    );
};
export const EventDiscription = ({description}) => {
    return (
        <h1>{description}</h1>
    );
};