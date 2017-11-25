import { connect } from 'react-redux';
import component from 'componentPath';
import {actionCreator} from 'actionCreatorPath';
import ShowPage from './show_page';

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);