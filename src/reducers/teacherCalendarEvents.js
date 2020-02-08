import {
    CALENDAR_EVENT_ADD,
    CALENDAR_EVENT_MODIFY,
    CALENDAR_EVENT_DELETE,
    CALENDAR_EVENT_VIEW,
    CALENDAR_EVENTS_VIEW_ALL
} from '../constants/ActionTypes';

import events from "../mock/events.js"

const initialState = {
    events: events
};

export default function teacherCalendarEvents(state = initialState, action) {
    switch (action.type) {
        case CALENDAR_EVENTS_VIEW_ALL:
            return state;
        case CALENDAR_EVENT_ADD:
            return state;
        case CALENDAR_EVENT_MODIFY:
            return state.events.find(event =>
                event.id === action.id
            );
        case CALENDAR_EVENT_DELETE:
            return state.events.find(event =>
                event.id === action.id
            );
        case CALENDAR_EVENT_VIEW:
            return state.events.find(event =>
                event.id === action.id
            );
        default:
            return state;
    }
}