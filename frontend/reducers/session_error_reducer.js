import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return ([action.payload]);
        case RECEIVE_CURRENT_USER:
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
};