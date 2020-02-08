import React from "react";
//import { format } from 'date-fns/esm'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import * as PropTypes from "prop-types";

//import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

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
                //dateClick={handleDateClick(props.events)}
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

// const handleDateClick = (arg) => {
//     this.setState({  // add new event data
//         calendarEvents: this.state.calendarEvents.concat({ // creates a new array
//             title: 'New Event',
//             start: arg.date,
//             allDay: arg.allDay
//         })
//     })
// };

Teacher.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
    addCalendarEvent: PropTypes.func.isRequired
};

export default Teacher;
