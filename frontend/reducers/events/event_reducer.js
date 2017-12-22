import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    RECEIVE_CREATED_EVENT
} from '../../actions/event_actions';

import { SET_SORT} from '../../actions/sort_actions'
import merge from 'lodash/merge';

const _events = {
    "byIDs": {},
    "order": []
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
            newstate =  action.payload;
            newstate.indexLoaded = true;
            return newstate;
        case 'RECEIVE_BOOKMARKS':
        case 'RECEIVE_REGISTRATION':
        case 'DELETE_BOOKMARKS':
        case 'DELETE_REGISTRATION':
        case RECEIVE_CREATED_EVENT:
        case RECEIVE_EVENT:
            newstate = merge({}, state, action.payload);
            newstate.order.unshift(parseInt(Object.keys(action.payload.byIDs)[0]));
            return newstate;
        case SET_SORT:
            newstate = merge({}, state);

            newstate.sortType = action.payload;
            return newstate;

        default:
            return state;
    }
};

