import { connect } from 'react-redux';
import ShowPage from './show_page';

const mapStatetoProps = (state, ownProps) =>{
    console.log(state);
    console.log('ownprops');
    console.log(ownProps);

    return ({
        currentUsersEvent: Boolean(ownProps.match.params.eventId === state.session.currentUser.id)
    });
};

const mapDispatchtoProps = (dispatch, ownProps) =>({

});

export default connect(mapStatetoProps, mapDispatchtoProps)(ShowPage);