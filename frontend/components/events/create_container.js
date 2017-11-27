import { connect } from 'react-redux';
import CreateEventComp from './create_event';

import { CreateEvent, clearEventErrors, UpdateEvent} from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => ({
    errors: state.errors.events,
    userId: state.session.currentUser.id

    
});

const mapDispatchToProps = (dispatch, ownProps) => {
    
    console.log(ownProps);
    const actionType = ownProps.match.path === '/create' ?
        CreateEvent
    :
        UpdateEvent
    ;

    return(
        {
            actionType: (event) => dispatch(actionType(event)),
            clearEventErrors: () => dispatch(clearEventErrors()),
        }
    );

};

export default connect(mapStatetoProps, mapDispatchToProps)(CreateEventComp);