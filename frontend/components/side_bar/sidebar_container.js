import { connect } from 'react-redux';
import SideBar from './side_bar';
import { getAllCatgories } from '../../actions/category_actions';
// import {}
import { Link, withRouter } from 'react-router-dom';


// this.props.currentUsersEvent ? <Link to={this.props.match.url + '/edit'


const mapStatetoProps = (state, ownProps) => {

    return ({
        categories: state.categories,
    });
};


const mapDispatchtoProps = (dispatch, ownProps) => ({
    getAllCatgories: () => dispatch(getAllCatgories())
});

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(SideBar));