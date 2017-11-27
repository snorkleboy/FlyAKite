import { connect } from 'react-redux';
import CreateEventComp from './create_event';

import { CreateEvent, clearEventErrors, UpdateEvent} from '../../actions/event_actions';

const mapStatetoProps = (state, ownProps) => {
    let type = 'create';
    let event = _event;
    event.userId = state.session.currentUser.id;
    if (ownProps.match.path === '/events/:eventId/edit'){
        type =  "edit";
        event = state.events.byIDs[ownProps.match.params.eventId];
    }
    return ({
        errors: state.errors.events,
        userId: state.session.currentUser.id,
        formType: type,
        event: event
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
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


const _nullEvent = {
    // userId: this.props.userId,
    name: '',
    startDate: '',
    header: "",
    description: "",
    imgURL: "",
    areaCode: "415",
    state: "CA",
    city: "San Fransisco",
    endDate: "",
};
const _event = {
    // userId: 1,
    name: 'asdasd',
    startDate: '2015-01-02T11:42:00',
    header: "asdasdsasada",
    description: "asdasadas",
    imgURL: "https://previews.123rf.com/images/ayzek/ayzek1105/ayzek110500057/9549034-Bridge-to-the-sucess--Stock-Photo.jpg",
    areaCode: "415",
    state: "CA",
    city: "San Fransisco",
    // endDate: "1123213213",
};