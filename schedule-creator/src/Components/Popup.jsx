import React, { useState, useEffect } from 'react';
import './Popup.css';

/**
 * Popup component for worker availability selection that allows users to:
 * - Set the maximum number of days a worker can work per week
 * - Select which days of the week they're available
 * - Choose between "All Day" availability or specific hours
 * - Select specific time slots in a visually appealing way
 */
const Popup = ({ 
  worker, 
  onSave, 
  onCancel,
  onRemove,
  modalTitle = "Edit Availability"
}) => {
  const [currentWorker, setCurrentWorker] = useState(worker);
  const [activeDay, setActiveDay] = useState(0); // Sunday selected by default
  
  // Update local state when worker prop changes
  useEffect(() => {
    setCurrentWorker(worker);
  }, [worker]);
  
  // Calculate how many days are marked as available
  const calculateAvailableDaysCount = () => {
    return Object.values(currentWorker.availability).filter(day => day.available).length;
  };
  
  // Calculate the maximum possible days to work
  const maxPossibleDays = calculateAvailableDaysCount();
  
  // Ensure maxDays doesn't exceed available days
  useEffect(() => {
    if (currentWorker.maxDays > maxPossibleDays && maxPossibleDays > 0) {
      setCurrentWorker({
        ...currentWorker,
        maxDays: maxPossibleDays
      });
    }
  }, [maxPossibleDays]);
  
  // Toggle availability for a specific day
  const toggleDayAvailability = (day) => {
    setCurrentWorker({
      ...currentWorker,
      availability: {
        ...currentWorker.availability,
        [day]: { 
          ...currentWorker.availability[day],
          available: !currentWorker.availability[day].available,
          hours: !currentWorker.availability[day].available ? [] : currentWorker.availability[day].hours,
          allDay: false
        }
      }
    });
  };
  
  // Generate business hours array
  const generateBusinessHours = () => {
    const businessHours = [];
    // Store hours from 5 AM to 10 PM
    for (let i = 5; i <= 22; i++) {
      businessHours.push(i);
    }
    return businessHours;
  };
  
  // Toggle "all day" availability for a specific day
  const toggleAllDay = (day) => {
    const businessHours = generateBusinessHours();
  
    setCurrentWorker({
      ...currentWorker,
      availability: {
        ...currentWorker.availability,
        [day]: { 
          ...currentWorker.availability[day],
          allDay: !currentWorker.availability[day].allDay,
          hours: !currentWorker.availability[day].allDay ? businessHours : []
        }
      }
    });
  };
  
  // Toggle specific hour availability for a day
  const toggleHourAvailability = (day, hour) => {
    // If it's all day, don't allow toggling individual hours
    if (currentWorker.availability[day].allDay) {
      return;
    }
    
    const hours = [...currentWorker.availability[day].hours];
    const hourIndex = hours.indexOf(hour);
    
    if (hourIndex === -1) {
      hours.push(hour);
    } else {
      hours.splice(hourIndex, 1);
    }
    
    // Update all day status if all hours are selected or some are deselected
    const allBusinessHours = hours.length === 18; // 5AM to 10PM = 18 hours
    
    setCurrentWorker({
      ...currentWorker,
      availability: {
        ...currentWorker.availability,
        [day]: { 
          ...currentWorker.availability[day],
          hours: hours,
          allDay: allBusinessHours
        }
      }
    });
  };

  // Get day name from index
  const getDayName = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };
  
  // Format hour for display (convert to 12-hour format)
  const formatHour = (hour) => {
    const period = hour < 12 ? 'AM' : 'PM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour} ${period}`;
  };
  
  // Create time blocks for morning, afternoon, evening
  const timeBlocks = [
    { name: 'Morning', hours: [5, 6, 7, 8, 9, 10, 11] },
    { name: 'Afternoon', hours: [12, 13, 14, 15, 16] },
    { name: 'Evening', hours: [17, 18, 19, 20, 21, 22] }
  ];

  // Handle save button click - pass updated worker to parent
  const handleSave = () => {
    // Check if at least one day is marked as available
    const hasAvailableDays = Object.values(currentWorker.availability).some(day => day.available);
    if (!hasAvailableDays) {
      alert('Please select at least one available day');
      return;
    }
    
    onSave(currentWorker);
  };

  // Custom dark navy color
  const darkNavy = "rgb(0, 35, 92)";

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <div className="text-xl font-semibold mb-4 text-center">{modalTitle}</div>
      
      {/* Maximum Days Setting */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-50">
        <div className="text-lg font-medium mb-3">Maximum Days per Week</div>
        <div className="flex items-center">
          <input
            type="number"
            min="1"
            max={maxPossibleDays}
            value={currentWorker.maxDays}
            onChange={(e) => setCurrentWorker({
              ...currentWorker,
              maxDays: Math.min(maxPossibleDays, Math.max(1, parseInt(e.target.value) || 1))
            })}
            className="w-16 p-2 border rounded-md text-center"
            disabled={maxPossibleDays === 0}
          />
          <span className="ml-3 text-gray-600">days</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {maxPossibleDays > 0 ? (
            <>This worker will be scheduled for at most {currentWorker.maxDays} day{currentWorker.maxDays !== 1 ? 's' : ''} per week</>
          ) : (
            <span className="text-amber-600">Please select at least one available day</span>
          )}
        </p>
        <p className="text-xs text-blue-600 mt-1">
          Maximum allowed: {maxPossibleDays} day{maxPossibleDays !== 1 ? 's' : ''} (based on availability)
        </p>
      </div>
      
      {/* Day selector tabs */}
      <div className="flex mb-6 overflow-x-auto">
        {[0, 1, 2, 3, 4, 5, 6].map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            style={{ 
              fontWeight: 700, 
              color: activeDay === day ? darkNavy : '#374151',
              borderColor: activeDay === day ? darkNavy : 'transparent'
            }}
            className={`flex-shrink-0 py-2 px-4 mr-2 rounded-t-lg border-b-2 focus:outline-none ${
              activeDay === day 
                ? 'bg-blue-50 day-tab-active' 
                : 'border-transparent hover:text-gray-700 hover:border-gray-300'
            } ${
              currentWorker.availability[day].available
                ? currentWorker.availability[day].allDay 
                  ? 'bg-blue-100' 
                  : 'bg-blue-50'
                : ''
            }`}
          >
            {getDayName(day)}
          </button>
        ))}
      </div>
      
      {/* Day availability toggle */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex items-center">
          <input
            id={`day-${activeDay}`}
            type="checkbox"
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            checked={currentWorker.availability[activeDay].available}
            onChange={() => toggleDayAvailability(activeDay)}
          />
          <label htmlFor={`day-${activeDay}`} className="ml-2 text-lg font-semibold" style={{ color: '#333333' }}>
            Available on {getDayName(activeDay)}
          </label>
        </div>
        
        {currentWorker.availability[activeDay].available && (
          <div className="flex items-center">
            <input
              id={`allday-${activeDay}`}
              type="checkbox"
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
              checked={currentWorker.availability[activeDay].allDay}
              onChange={() => toggleAllDay(activeDay)}
            />
            <label htmlFor={`allday-${activeDay}`} className="ml-2 text-lg font-semibold" style={{ color: '#333333' }}>
              Available All Day
            </label>
          </div>
        )}
      </div>
      
      {/* Time selection - Always show time blocks when available, even if allDay is true */}
      {currentWorker.availability[activeDay].available && (
        <div className="space-y-4">
          {timeBlocks.map((block, blockIndex) => (
            <div key={blockIndex} className="border rounded-lg p-4">
              <div className="text-lg font-medium mb-3">{block.name}</div>
              <div className="grid grid-cols-4 gap-2">
                {block.hours.map(hour => (
                  <div
                    key={hour}
                    onClick={() => toggleHourAvailability(activeDay, hour)}
                    className={`px-2 py-3 rounded-md text-center transition-colors duration-200 ${
                      currentWorker.availability[activeDay].allDay || 
                      currentWorker.availability[activeDay].hours.includes(hour)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${
                      !currentWorker.availability[activeDay].allDay ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    {formatHour(hour)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Actions */}
      <div className="flex justify-between mt-8 pt-4 border-t">
        {onRemove && (
          <button
            onClick={() => onRemove(currentWorker)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Remove Worker
          </button>
        )}
        <div className={`${onRemove ? '' : 'ml-auto'} space-x-3`}>
          <button
            onClick={onCancel}
            className="text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            style={{ backgroundColor: darkNavy, borderColor: darkNavy }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            style={{ backgroundColor: darkNavy, borderColor: darkNavy }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;