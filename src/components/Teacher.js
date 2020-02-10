import React from "react";
import * as PropTypes from "prop-types";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Teacher = props => {
    let calendarComponentRef = React.createRef();
    console.log(props.events);
    return (
        <div className='calendar'>
            <FullCalendar
                defaultView="dayGridMonth"
                header={{
                    left: '',
                    center: 'title',
                    right: 'prev,next today'
                }}
                ref={ calendarComponentRef }
                plugins={[dayGridPlugin]}
                weekends={true}
                events={props.events}
                eventClick = {handleEventClick}
            />
        </div>
    )
};

const handleEventClick = (arg) => {
    console.log(arg.event);
    if (arg.event.extendedProps.status_id === 1) {
        alert(`${arg.event.title}`);
    }
};

Teacher.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
    addCalendarEvent: PropTypes.func.isRequired
};

export default Teacher;
