import merge from 'lodash/merge';

import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION} from '../actions/registration_actions';
import { RECEIVE_BOOKMARKS, DELETE_BOOKMARKS } from '../actions/bookmark_actions';

const _nullUser = Object.freeze({
    currentUser: null,
    registrations: [],
    bookmarks:[]
});

const sessionReducer = (state = _nullUser, action) =>{
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case DELETE_BOOKMARKS:
            newState = merge({}, state);
            const indexx = newState.bookmarks.indexOf(action.payload);
            newState.bookmarks.splice(indexx, 1);
            return newState;
        case RECEIVE_BOOKMARKS:
            newState = merge({}, state);
            newState.bookmarks.push(action.payload);
            // console.log("RECEIVE_BOOKMARKS ", action, state);
            return newState;

        case RECEIVE_REGISTRATION:

            newState = merge({}, state);
            // console.log("newState", newState);
            newState.registrations.push(action.payload);
            // console.log("newState", newState);
            return newState;
        case RECEIVE_CURRENT_USER:
            newState = merge({}, state);
        // console.log("sess reducer", state, action.payload);
            newState.currentUser = action.payload.current_user;
            newState.registrations = action.payload.registrations;
            newState.bookmarks = action.payload.bookmarks;
            return newState;
        case DELETE_REGISTRATION:
            newState = merge({}, state);
            const index = newState.registrations.indexOf(action.payload);
            newState.registrations.splice(index, 1);

            return newState;
        default:
            return state;
    }
};

export default sessionReducer;