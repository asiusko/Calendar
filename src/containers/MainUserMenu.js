import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRoleId } from '../actions';
import MainUserMenu from '../components/MainUserMenu';

const mapStateToProps = state => ({
    menuItems: state.userMenu.menuItems,
    activeItem: state.userMenu.activeItem
});

const mapDispatchToProps = dispatch => ({
    setRoleId: bindActionCreators(setRoleId, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainUserMenu);
