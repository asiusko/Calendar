import * as types from '../constants/ActionTypes';

export const setRoleId = roleId => ({
    type: types.MENU_GO_TO,
    payload: roleId
});
export const login = () => ({type: types.LOGIN});
export const logout = () => ({type: types.LOGOUT});

export const viewAllEvents = () => ({type: types.CALENDAR_EVENTS_VIEW_ALL});
export const addCalendarEvent = () => ({type: types.CALENDAR_EVENT_ADD});
//export const deleteCalendarEvent = calendarEventGUID => ({type: types.CALENDAR_EVENT_DELETE, calendarEventGUID});
//export const viewCalendarEvent = calendarEventGUID => ({type: types.CALENDAR_EVENT_VIEW, calendarEventGUID});
