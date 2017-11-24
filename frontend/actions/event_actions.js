import * as EventAPI from '../util/eventAPI';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENTS_ERROR = 'RECEIVE_EVENT_ERROR'


export const receiveEventsErrors = (events) => ({
    type: RECEIVE_EVENTS_ERROR,
    payload: events
});


export const receiveAllEvents = (events)=>({
    type: RECEIVE_ALL_EVENTS,
    payload: events
});


export const GetAllEvents = ()=> dispatch => EventAPI.fetchAllEvents()
    .then((success) => dispatch(receiveAllEvents(success)),
            (fail) => dispatch(receiveEventsErrors(fail)));