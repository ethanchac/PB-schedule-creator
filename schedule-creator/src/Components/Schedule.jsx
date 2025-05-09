import { useState, useEffect } from 'react';
import './Schedule.css';

function Schedule() {
  const [currDay, setCurrDay] = useState(null);
  const [currentWeek, setCurrentWeek] = useState([]);

  // Getting the Current day
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
      .catch(error => {
        console.error("Error fetching time data:", error);
        // Fallback to current date if API fails
        generateWeekDays(new Date());
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Generate array of dates for the current week
  const generateWeekDays = (date) => {
    const dayOfWeek = date.getDay(); // 0 is Sunday, 6 is Saturday
    const days = [];
    
    // Get previous Sunday (or current day if it's Sunday)
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - dayOfWeek);
    
    // Generate 7 days starting from Sunday
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    
    setCurrentWeek(days);
  };

  const formatDate = (date) => {
    if (!date) return '';
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getHourLabel = (hour) => {
    // Convert to 12-hour format with AM/PM
    const period = hour < 12 ? 'AM' : 'PM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour} ${period}`;
  };

  // Hours from 5 AM to 10 PM
  const hours = [
    5, 6, 7, 8, 9, 10, 11, 12, 
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22
  ];
  
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <div className="month-year">
          {currentWeek.length > 0 ? formatDate(currentWeek[0]) : 'Loading...'}
        </div>
        <div className="time-range">
          5 a.m. - 10 p.m.
        </div>
      </div>
      
      <div className="schedule-grid">
        <div className="time-column">
          <div className="day-header">EST</div>
          <div className="time-cells-container">
            {hours.map((hour, index) => (
              <div key={`hour-${index}`} className="time-cell">
                {getHourLabel(hour)}
              </div>
            ))}
          </div>
        </div>
        
        {currentWeek.map((day, dayIndex) => (
          <div key={`day-${dayIndex}`} className="day-column">
            <div className="day-header">
              <div className="day-name">{daysOfWeek[dayIndex]}</div>
              <div className="day-number">{day.getDate()}</div>
            </div>
            
            <div className="day-cells-container">
              {hours.map((hour, hourIndex) => (
                <div key={`cell-${dayIndex}-${hourIndex}`} className="calendar-cell"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;