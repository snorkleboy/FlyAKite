import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent } from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) =>{

    console.log(state.events.byIDs[ownProps.match.params.eventId]);
    return ({
        // currentUsersEvent: Boolean(ownProps.match.params.eventId === state.session.currentUser.id),
        event: state.events.byIDs[ownProps.match.params.eventId]
    });
};

const mapDispatchtoProps = (dispatch, ownProps) =>{
    

    return ({
        getEvent: (id) => dispatch(GetEvent(id) )
        // editPage: dispatch(action)
        // register
        //bookmark

    });

};

export default connect(mapStatetoProps, mapDispatchtoProps)(ShowPage);