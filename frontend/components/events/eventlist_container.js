import { connect } from 'react-redux';
import React from 'react';
//actions
import * as EventActions from '../../actions/event_actions';
import Eventlist from './eventlist';
import { GetAllEvents } from '../../actions/event_actions';
import { getIndex, getIndexDiff} from '../../actions/category_actions';
import { sortEvents } from '../../actions/sort_actions';
import { makeRegistration,deleteRegistration} from '../../actions/registration_actions';
import { createBookmark, deleteBookmark} from '../../actions/bookmark_actions';
//selectors
import * as Selectors from '../../reducers/selectors/selectors';





const mapStateToProps = (state, ownProps) => {
    
    let catId = 0;
    let eventList = [];
    const matchParam = ownProps.match.params.categoryId;
    
    if ( matchParam ){
        if (matchParam === 'registered' || matchParam === 'bookmarked'){
            eventList = Selectors.selectUserEvents(state.events, matchParam==='registered'? state.session.registrations : state.session.bookmarks  );
        }  else{
            catId = parseInt(ownProps.match.params.categoryId);
            eventList = Selectors.SelectByCategory(state.events, catId);
        }

    } else{
        eventList = Selectors.SelectByCategory(state.events, catId);
    }
    console.log("eventlist", state.events.byIDs, "state", state.events)
        return ({
        eventsList: Object.values(state.events.byIDs), 
        indexLoaded: state.events.indexLoaded,
        sortType: state.events.sortType,
        RegisteredEventIds: state.session.registrations,
        BookmarkedEventIds: state.session.bookmarks,
        loggedIn: state.session.currentUser
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    
    makeRegistration: (eventId, userId) => dispatch(makeRegistration(eventId, userId)),
    deleteRegistration: (eventId) => dispatch(deleteRegistration(eventId)),
    createBookmark: (eventId) => dispatch(createBookmark(eventId)),
    deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId))

});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);