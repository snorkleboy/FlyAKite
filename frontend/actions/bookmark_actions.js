import * as BookmarkActions from '../util/bookmarkAPI';


export const RECEIVE_BOOKMARKS = "RECEIVE_BOOKMARKS";
export const DELETE_BOOKMARKS = 'DELETE_BOOKMARKS';

export const receiveBookmark = (bookmark) => ({
    type: RECEIVE_BOOKMARKS,
    payload: bookmark
});

export const removeBookmark = (eventId) => ({
    type: DELETE_BOOKMARKS,
    payload: eventId
});


export const createBookmark = (eventId) => dispatch => BookmarkActions.createBookmark(eventId)
    .then((success) => dispatch(receiveBookmark(success)));

export const deleteBookmark = (eventId) => dispatch => BookmarkActions.deleteBookmark(eventId)
    .then((success) => dispatch(removeBookmark(eventId))); 