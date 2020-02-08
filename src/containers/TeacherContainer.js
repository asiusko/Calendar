import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCalendarEvent } from '../actions';
import Teacher from '../components/Teacher';

const mapStateToProps = state => ({
    events: state.teacherCalendarEvents.events
});

const mapDispatchToProps = dispatch => ({
    addCalendarEvent: bindActionCreators(addCalendarEvent, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teacher);
