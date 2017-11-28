import {
    RECEIVE_EVENT,
    RECEIVE_EVENTS_ERROR,
    CLEAR_EVENT_ERRORS,
    RECEIVE_CREATED_EVENT
} from '../../actions/event_actions';


import merge from 'lodash/merge';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS_ERROR:
            return ([action.payload]);
        case RECEIVE_CREATED_EVENT:
            // return (["success", Object.keys(action.payload.byIDs)[0]]);
        case RECEIVE_EVENT:
        case CLEAR_EVENT_ERRORS:
            return [];
        default:
            return state;
    }
};