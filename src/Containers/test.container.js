import {connect} from 'react-redux';
import {test} from '../actions';
import Test from'../Components/Test';

const mapStateToProps = state => ({
    test: state.tests.test1
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(test)
})
export default connect(mapStateToProps, mapDispatchToProps)(Test);