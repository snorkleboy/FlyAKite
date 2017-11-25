import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent } from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) =>{

    const currentusersevent = state.session.currentUser ? Boolean(ownProps.match.params.eventId === state.session.currentUser.id) : null;
    return ({
        currentUsersEvent: currentusersevent,
        event: state.events.byIDs[ownProps.match.params.eventId] || null
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