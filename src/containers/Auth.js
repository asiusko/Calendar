import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Auth from '../components/Auth';
import {login, logout} from "../actions";

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch)
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(Auth)