import {
    TOGGLE_LOGIN_FORM,
    TOGGLE_PROFILE,
    CLOSE_ALL
} from '../actions/navbar_ui_actions';

import merge from 'lodash/merge';



const _navbarUI = {dropdown:null};

export default (state = _navbarUI, action) => {
    Object.freeze(state);
    let newState = merge({},state);
    switch (action.type) {        
        case TOGGLE_LOGIN_FORM:
            newState.showLogin = !newState.showLogin;
            return newState;
        case TOGGLE_PROFILE:
            newState.showProfile = !newState.showProfile || true;
            return newState;
        case CLOSE_ALL:
            return _navbarUI;
        default:
            return state;
    }
};