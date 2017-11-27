import { connect } from 'react-redux';
import SideBar from './side_bar';
// import { GetEvent } from '../../actions/event_actions';
import { Link, withRouter } from 'react-router-dom';


// this.props.currentUsersEvent ? <Link to={this.props.match.url + '/edit'


const mapStatetoProps = (state, ownProps) => {

    return ({
    });
};


const mapDispatchtoProps = (dispatch, ownProps) => ({

});

export default withRouter(connect(null, null)(SideBar));