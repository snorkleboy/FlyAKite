import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    RECEIVE_CREATED_EVENT
} from '../../actions/event_actions';


import merge from 'lodash/merge';

const _events = {
    "byIDs": {},
    "order": [],
    "indexLoaded":false
};
export default (state = _events, action) => {
    Object.freeze(state);
    var newstate={};
    switch (action.type) {
        
        case RECEIVE_ALL_EVENTS:
            newstate = merge({}, state, action.payload);
            newstate.indexLoaded = true;
            return newstate;
        case RECEIVE_CREATED_EVENT:
        case RECEIVE_EVENT:
            newstate = merge({}, state, action.payload);
            newstate.order.push(Object.keys(action.payload.byIDs)[0]);

            return newstate;

        default:
            return state;
    }
};

