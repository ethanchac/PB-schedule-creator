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
    <div className="schedule-container">
      <div className="schedule-header">
        <div className="month-year">
          {currentWeek.length > 0 ? formatDate(currentWeek[0]) : 'Loading...'}
        </div>
        <div className="time-range">5 a.m. - 10 p.m.</div>
      </div>

      <div className="schedule-grid">
        {/* EST Column */}
        <div className="column est-column">
          <div className="day-header">
            <div className="day-name">EST</div>
            <div className="day-number" style={{ visibility: 'hidden' }}>0</div>
          </div>
          <div className="cell-container">
            {hours.map((hour, index) => (
              <div
                key={`hour-${index}`}
                className="time-cell"
                style={{ height: '28px' }}
              >
                <span className="time-label">{getHourLabel(hour)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Day Columns */}
        {currentWeek.map((day, index) => (
          <div key={`day-${index}`} className="column day-column">
            <div className="day-header" style={{ marginBottom: 0 }}>
                <div className="day-name">{daysOfWeek[index]}</div>
                <div className="day-number">{day.getDate()}</div>
            </div>
            <div className="cell-container">
              {hours.map((_, hourIndex) => (
                <div
                  key={`cell-${index}-${hourIndex}`}
                  className="calendar-cell"
                  style={{ height: '28px' }}
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
