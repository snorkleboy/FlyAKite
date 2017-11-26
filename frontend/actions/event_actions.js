import * as EventAPI from '../util/eventAPI';


export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_CREATED_EVENT = 'RECEIVE_CREATED_EVENT';
export const RECEIVE_EVENTS_ERROR = 'RECEIVE_EVENT_ERROR';
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const clearEventErrors = () => ({
    type: CLEAR_EVENT_ERRORS
});
export const receiveEventsErrors = (errors) => ({
    type: RECEIVE_EVENTS_ERROR,
    payload: errors.responseText
});





export const receiveAllEvents = (events)=>({
    type: RECEIVE_ALL_EVENTS,
    payload: events
});
export const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    payload: event
});

export const receiveCreatedEvent = (event) => ({
    type: RECEIVE_CREATED_EVENT,
    payload: event
});
export const CreateEvent = (event) => dispatch => EventAPI.createEvent(event)
    .then((success) => dispatch(receiveCreatedEvent(success)),
        (fail) => dispatch(receiveEventsErrors(fail) ));

export const GetAllEvents = ()=> dispatch => EventAPI.fetchAllEvents()
    .then((success) => dispatch(receiveAllEvents(success)),
            (fail) => dispatch(receiveEventsErrors(fail)));


export const GetEvent = (id) => dispatch => EventAPI.fetchEvent(id)
    .then((success) => dispatch(receiveEvent(success) ),
    (fail) => dispatch(receiveEventsErrors(fail) ) );