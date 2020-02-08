import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import teacherCalendarEvents from './teacherCalendarEvents';
import userMenu from './userMenu';
import auth from './auth'

const rootReducer = (history) => combineReducers({
    auth,
    userMenu,
    teacherCalendarEvents: teacherCalendarEvents,
    router: connectRouter(history)
});

export default rootReducer;
