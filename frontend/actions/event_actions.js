import * as EventAPI from '../util/eventAPI';


export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_CREATED_EVENT = 'RECEIVE_CREATED_EVENT';
export const RECEIVE_EVENTS_ERROR = 'RECEIVE_EVENT_ERROR';
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";
export const DELETE_EVENT = "DELETE_EVENT"

export const clearEventErrors = () => ({
    type: CLEAR_EVENT_ERRORS
});
export const receiveEventsErrors = (errors) => ({
    type: RECEIVE_EVENTS_ERROR,
    payload: errors.responseText
});



export const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    payload: event
});

export const receiveAllEvents = (events)=>({
    type: RECEIVE_ALL_EVENTS,
    payload: events
});

export const deleteEvent = (event) => ({
    type: DELETE_EVENT,
    payload: event
});

export const receiveCreatedEvent = (event) => ({
    type: RECEIVE_CREATED_EVENT,
    payload: event
});

export const CreateEvent = (event, sCB) => dispatch => EventAPI.createEvent(event)
    .then((success) => {
        sCB(success);
        return dispatch(receiveCreatedEvent(success));
    },
    (fail) => dispatch(receiveEventsErrors(fail)));

export const UpdateEvent = (event, sCB) => dispatch => EventAPI.updateEvent(event)
    .then((success) => {
        sCB(success);
        return dispatch(receiveCreatedEvent(success) );
    },
    (fail) => dispatch(receiveEventsErrors(fail)));



export const GetAllEvents = ()=> dispatch => EventAPI.fetchAllEvents()
    .then((success) => dispatch(receiveAllEvents(success)),
            (fail) => dispatch(receiveEventsErrors(fail)));


export const GetEvent = (id) => dispatch => EventAPI.fetchEvent(id)
    .then((success) => dispatch(receiveEvent(success) ),
    (fail) => dispatch(receiveEventsErrors(fail) ) );
export const deleteEventCall = (id) => dispatch => EventAPI.deleteEvent(id)
    .then((success) => dispatch(deleteEvent(id)),
            (error) => dispatch(receiveEventsErrors(id)));
export const GetEventsbyCategory = (categoryId, options) => dispatch => EventAPI.fetchbyCategory(categoryId, options)
    .then((success) => dispatch(receiveAllEvents(success)));

export const GetBookmarked = () => dispatch => EventAPI.fetchBookmarked()
    .then((success) => dispatch(receiveAllEvents(success)));
export const GetRegistered = () => dispatch => EventAPI.fetchRegistered()
    .then((success) => dispatch(receiveAllEvents(success)));
export const GetMyEvents = () => dispatch => EventAPI.fetchMyEvents()
    .then((success) => dispatch(receiveAllEvents(success)));
export const Search =(pattern, catId, time) => dispatch => EventAPI.fetchbySearch(pattern, catId, time)
    .then((success) => dispatch(receiveAllEvents(success)));
export const GetRecent = () => dispatch => EventAPI.fetchRecent()
    .then((success) => dispatch(receiveAllEvents(success)));
export const GetUpcoming = () => dispatch => EventAPI.fetchUpcoming()
    .then((success) => dispatch(receiveAllEvents(success)));
