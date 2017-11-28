import merge from 'lodash/merge';

import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_REGISTRATION, DELETE_REGISTRATION} from '../actions/registration_actions';


const _nullUser = Object.freeze({
    currentUser: null,
    registrations: []
});

const sessionReducer = (state = _nullUser, action) =>{
    Object.freeze(state);
    let newState = merge ({}, state);
    switch(action.type){
        case RECEIVE_REGISTRATION:
            newState.registrations.push(action.payload);
            return newState;
        case RECEIVE_CURRENT_USER:
            newState.currentUser = action.payload;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;