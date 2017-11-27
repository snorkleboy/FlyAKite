import { connect } from 'react-redux';
import ShowPage from './show_page';
import { GetEvent } from '../../actions/event_actions';
import { Link, withRouter } from 'react-router-dom';
const mapStatetoProps = (state, ownProps) =>{
        const event = state.events.byIDs[ownProps.match.params.eventId] ;
        const currUsers = state.session.currentUser && event?
                Boolean(event.userId === state.session.currentUser.id)
                :
                        null
                ;
        return({
                currentUsersEvent: currUsers,
                event: event || null
        });
};


const mapDispatchtoProps = (dispatch, ownProps) =>({
        getEvent: (id) => dispatch(GetEvent(id) )
        // editPage: 
        // register
        //bookmark

    });

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(ShowPage));