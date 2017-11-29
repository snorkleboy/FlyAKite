import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent } from '../../actions/event_actions';
import { Link, withRouter } from 'react-router-dom';
import { makeRegistration, deleteRegistration} from '../../actions/registration_actions';
import { createBookmark, deleteBookmark} from '../../actions/bookmark_actions';


const mapStatetoProps = (state, ownProps) =>{
        // console.log("showcontainerstate", state);
        const event = state.events.byIDs[ownProps.match.params.eventId] ;
        let registered = false;
        let bookmarked = false;
        if (event){
                registered = state.session.registrations.includes(event.id);
                bookmarked = state.session.bookmarks.includes(event.id);

        }

        const currUsers = state.session.currentUser && event?
                        Boolean(event.userId === state.session.currentUser.id)
                :
                        null
                ;
        return({
                bookmarked: bookmarked,
                registered: registered,
                currentUsersEvent: currUsers,
                event: event || null,
                currentUser: state.session.currentUser ? state.session.currentUser.id : null
        });
};


const mapDispatchtoProps = (dispatch, ownProps) =>({
        getEvent: (id) => dispatch(GetEvent(id) ),
        makeRegistration: (eventId, userId) => dispatch(makeRegistration(eventId, userId)),
        deleteRegistration: (eventId) => dispatch(deleteRegistration(eventId)),
        createBookmark: (eventId) => dispatch(createBookmark(eventId)),
        deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId))

    });

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(ShowPage));