import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    RECEIVE_CREATED_EVENT
} from '../../actions/event_actions';


import merge from 'lodash/merge';

const _events = {
    "byIDs": {},
    "order": []
};
export default (state = _events, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CREATED_EVENT:
        case RECEIVE_ALL_EVENTS:
        case RECEIVE_EVENT:
            return merge({}, state, action.payload);

        default:
            return state;
    }
};

