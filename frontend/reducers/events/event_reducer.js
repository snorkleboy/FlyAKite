import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENTS_ERROR,
} from '../../actions/event_actions';


import merge from 'lodash/merge';
// sample
// const events = {
//     "byIDs":{
//                 1:{...}
//                 2:{...}"
//                 ...
//             }
//     "order":[1,4,3,5,6]
// };



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

