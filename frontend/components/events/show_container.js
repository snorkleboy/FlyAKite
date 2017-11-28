import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent } from '../../actions/event_actions';
import { Link, withRouter } from 'react-router-dom';
import { makeRegistration} from '../../actions/registration_actions';


const mapStatetoProps = (state, ownProps) =>{
        console.log("showcontainerstate", state);
        const event = state.events.byIDs[ownProps.match.params.eventId] ;




        const registered = event? Boolean( state.session.registrations.includes(event.id) ): false;





        const currUsers = state.session.currentUser && event?
                        Boolean(event.userId === state.session.currentUser.id)
                :
                        null
                ;
        return({
                registered: registered,
                currentUsersEvent: currUsers,
                event: event || null,
                currentUser: state.currentUser ? state.currentUser.id : null
        });
};


const mapDispatchtoProps = (dispatch, ownProps) =>({
        getEvent: (id) => dispatch(GetEvent(id) ),
        makeRegistration: (eventId, userId) => dispatch(makeRegistration(eventId, userId))
    });

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(ShowPage));