import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent, deleteEventCall } from '../../actions/event_actions';
import { Link, withRouter } from 'react-router-dom';
import { makeRegistration, deleteRegistration} from '../../actions/registration_actions';
import { createBookmark, deleteBookmark} from '../../actions/bookmark_actions';

import { redirected } from '../../actions/navbar_ui_actions';

const mapStatetoProps = (state, ownProps) =>{
        return({
                event: state.events.byIDs[ownProps.match.params.eventId] || null,
                currentUser: state.session.currentUser ? state.session.currentUser.id : null
        });
};
const mapDispatchtoProps = (dispatch, ownProps) => ({
  getEvent: id => dispatch(GetEvent(id)),
  makeRegistration: (eventId, userId, stripeDet) =>dispatch(makeRegistration(eventId, userId, stripeDet)),
  deleteRegistration: eventId => dispatch(deleteRegistration(eventId)),
  createBookmark: eventId => dispatch(createBookmark(eventId)),
  deleteBookmark: eventId => dispatch(deleteBookmark(eventId)),
  deleteEventCall: id => dispatch(deleteEventCall(id)),
  redirected: path => dispatch(redirected(path))
});

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(ShowPage));