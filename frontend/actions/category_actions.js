import * as categoryApi from '../util/categoryAPI';
import {RECEIVE_ALL_EVENTS , receiveAllEvents } from './event_actions';


export const FETCH_INDEX = "FETCH_INDEX";
export const RECEIVE_INDEX = 'RECEIVE_INDEX';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = (categories) =>({
    type: RECEIVE_CATEGORIES,
    payload: categories
});

export const getAllCatgories = () => dispatch => categoryApi.getAllCatgories()
    .then((success) => dispatch(receiveCategories(success.categories)));

export const getIndex = () => (dispatch) => categoryApi.fetchIndex()
    .then((success) => {
        dispatch(receiveCategories(success.categories));
        dispatch(receiveAllEvents(success.events));
        
    } );

export const getIndexDiff = (lists) => (dispatch) => categoryApi.fetchIndexDiff(lists)
    .then((success) => {
        console.log('action diff');
        console.log(lists);
        console.log(success);
        dispatch(receiveCategories(success.categories));
        dispatch(receiveAllEvents(success.events));


    });

