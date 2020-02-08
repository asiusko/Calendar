import {connect} from 'react-redux';
import ProtectedRoute from '../components/core/ProtectedRoute';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps
)(ProtectedRoute);
