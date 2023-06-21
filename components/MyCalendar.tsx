import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment-timezone'
import "react-big-calendar/lib/css/react-big-calendar.css";


moment.tz.setDefault("America/Bogota")

const localizer = momentLocalizer(moment)

const myEventsList = [
  {
    title: 'All Day Event very long title',
    start: moment("2023-06-01T10:00:00").toDate(),
    end: moment("2023-06-01T12:00:00").toDate(),
  },
  {
    title: 'Long Event',
    start: moment("2023-06-07T10:00:00").toDate(),
    end: moment("2023-06-10T12:00:00").toDate(),
  }
]

const MyCalendar = (props) => (
  <div>
    <Calendar
      defaultView={"month"}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar