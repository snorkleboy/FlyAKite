import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    RECEIVE_CREATED_EVENT
} from '../../actions/event_actions';

import { SET_SORT} from '../../actions/sort_actions'
import merge from 'lodash/merge';

const _events = {
    "byIDs": {},
    "order": [],
    "sortType":"all",
    "indexLoaded":false
};

// Object.values(action.payload.byIDs).forEach((event) => {
//     if (newstate.session.registrations.includes(event.id)) {
//         event.registered = true;
//     };
// }
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
            newstate.order.push(parseInt(Object.keys(action.payload.byIDs)[0]));
            return newstate;
        case SET_SORT:
            newstate = merge({}, state);

            newstate.sortType = action.payload;
            return newstate;

        default:
            return state;
    }
};

