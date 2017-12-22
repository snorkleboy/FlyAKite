import merge from 'lodash/merge';

import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION} from '../actions/registration_actions';
import { RECEIVE_BOOKMARKS, DELETE_BOOKMARKS } from '../actions/bookmark_actions';

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state = _nullUser, action) =>{
    Object.freeze(state);
    let newState = {};
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState = merge({}, state);
   
            newState.currentUser = action.payload.current_user;
            newState.registrations = action.payload.registrations;
            newState.bookmarks = action.payload.bookmarks;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;