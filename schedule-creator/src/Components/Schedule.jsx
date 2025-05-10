import { useState, useEffect } from 'react';
import './Schedule.css';

function Schedule() {
  const [currDay, setCurrDay] = useState(null);
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("http://worldtimeapi.org/api/timezone/America/Toronto")
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setCurrDay(data);
          generateWeekDays(new Date(data.datetime));
        }
      })
      .catch(() => {
        // Fallback to local date if API fails
        generateWeekDays(new Date());
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const generateWeekDays = (date) => {
    const dayOfWeek = date.getDay();
    const days = [];

    const startDate = new Date(date);
    startDate.setDate(date.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }

    setCurrentWeek(days);
  };

  const formatDate = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getHourLabel = (hour) => {
    const period = hour < 12 ? 'AM' : 'PM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour} ${period}`;
  };

  const hours = Array.from({ length: 18 }, (_, i) => i + 5); // 5 AM to 10 PM
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="cal-schedule-container">
      <div className="cal-schedule-header">
        <div className="cal-month-year">
          {currentWeek.length > 0 ? formatDate(currentWeek[0]) : 'Loading...'}
        </div>
        <div className="cal-time-range">5 a.m. - 10 p.m.</div>
      </div>

      <div className="cal-schedule-grid">
        {/* EST Column */}
        <div className="cal-column cal-time-column">
          <div className="cal-day-header">
            <span className="cal-day-name">EST</span>
          </div>
          <div className="cal-cell-container">
            {hours.map((hour) => (
              <div key={`hour-${hour}`} className="cal-time-cell">
                <span className="cal-time-label">
                  {getHourLabel(hour)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Day Columns */}
        {currentWeek.map((day, index) => (
          <div key={`day-${index}`} className="cal-column">
            <div className="cal-day-header">
              <span className="cal-day-name">{daysOfWeek[day.getDay()]}</span>
              <span className="cal-day-number">{day.getDate()}</span>
            </div>
            <div className="cal-cell-container">
              {hours.map((hour) => (
                <div
                  key={`cell-${index}-${hour}`}
                  className="cal-calendar-cell"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;