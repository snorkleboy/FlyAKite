import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENTS_ERROR,
} from '../../actions/event_actions';


import merge from 'lodash/merge';

const _events = {
    "byIDs": {},
    "order": []
};
export default (state = _events, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return merge({}, state, action.payload);
        default:
            return state;
    }
};

