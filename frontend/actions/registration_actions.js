import * as RegActions from '../util/registrationApi';
export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const receiveRegistration = (registration) =>({
    type: RECEIVE_REGISTRATION,
    payload: registration
});
export const removeRegistration = (eventId) =>({
    type: DELETE_REGISTRATION,
    payload: eventId
});
export const makeRegistration = (eventId, userId, stripeDet) => dispatch => RegActions.createRegistration(eventId, userId, stripeDet).then(
           success => dispatch(receiveRegistration(success))
         ); 

export const deleteRegistration = (eventId) => dispatch => RegActions.deleteRegistration(eventId)
    .then((success) => dispatch(removeRegistration(success))); 

// export const deleteRegistration = 