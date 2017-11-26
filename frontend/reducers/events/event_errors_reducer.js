import {
    RECEIVE_EVENT,
    RECEIVE_EVENTS_ERROR,
    CLEAR_EVENT_ERRORS
} from '../../actions/event_actions';


import merge from 'lodash/merge';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS_ERROR:
            return ([action.payload]);
        case RECEIVE_EVENT:
        case CLEAR_EVENT_ERRORS:
            return [];
        default:
            return state;
    }
};