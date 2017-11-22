import * as SessionAPI from '../util/sessionAPI';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"


export const receiveCurrentUser = (currentUser) =>({
    type: RECEIVE_CURRENT_USER,
    payload: currentUser
});

export const receiveErrors = (errorArray) => ({
    type: RECEIVE_ERRORS,
    payload: errorArray
});

//thunk //thunk
export const login = (user) => dispatch => SessionAPI.login(user)
.then(
    (success)=> dispatch(receiveCurrentUser(success)),
    ((failure)=> dispatch(receiveErrors(failure)))
    )

export const logout = (uer) => dispatch => SessionAPI.logout()
    .then(
    (success) => dispatch(receiveCurrentUser(null)),
    ((failure) => dispatch(receiveErrors(failure)))
    )

export const signup = (user) => dispatch => SessionAPI.signup(user)
    .then(
    (success) => dispatch(receiveCurrentUser(success)),
    ((failure) => dispatch(receiveErrors(failure)))
    )


