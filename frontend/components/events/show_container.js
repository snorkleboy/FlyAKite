import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent } from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) =>({

        currentUsersEvent: state.session.currentUser ?
                Boolean(ownProps.match.params.eventId === state.session.currentUser.id) 
            : 
                null,

        event: state.events.byIDs[ownProps.match.params.eventId] || null
});


const mapDispatchtoProps = (dispatch, ownProps) =>({
        getEvent: (id) => dispatch(GetEvent(id) )
        // editPage: 
        // register
        //bookmark

    });

export default connect(mapStatetoProps, mapDispatchtoProps)(ShowPage);