import {useState, useEffect} from 'react';
import './Creator.css'

function Creator() {
    const [staff, setStaff] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showAvailabilityModal, setShowAvailabilityModal] = useState(false); // New state for availability modal
    const [showCustomWorkers, setShowCustomWorkers] = useState(false);
    const [settings, setSettings] = useState({
      minWorkersPerShift: 1,
      maxWorkersTotal: 10,
      minHoursPerWorker: 4,
      maxHoursPerWorker: 8,
      customWorkersByDay: {
        0: { min: 1, max: 5 }, // Sunday
        1: { min: 1, max: 5 }, // Monday
        2: { min: 1, max: 5 }, // Tuesday
        3: { min: 1, max: 5 }, // Wednesday
        4: { min: 1, max: 5 }, // Thursday
        5: { min: 1, max: 5 }, // Friday
        6: { min: 1, max: 5 }  // Saturday
      }
    });
    const [currentWorker, setCurrentWorker] = useState({
      name: '',
      maxDays: 5,
      availability: {
        0: { available: false, allDay: false, hours: [] }, // Sunday
        1: { available: false, allDay: false, hours: [] }, // Monday
        2: { available: false, allDay: false, hours: [] }, // Tuesday
        3: { available: false, allDay: false, hours: [] }, // Wednesday
        4: { available: false, allDay: false, hours: [] }, // Thursday
        5: { available: false, allDay: false, hours: [] }, // Friday
        6: { available: false, allDay: false, hours: [] }  // Saturday
      }
    });
    
    // Add this useEffect after your other state and function declarations
    useEffect(() => {
      if (staff.length > 0) {
        console.log('Current staff and their availability:');
        staff.forEach(worker => {
          console.log(`Worker: ${worker.name}`);
          console.log(`Max days: ${worker.maxDays}`);
          console.log('Availability:');
          
          Object.entries(worker.availability).forEach(([day, dayData]) => {
            const dayName = getDayName(parseInt(day));
            if (dayData.available) {
              if (dayData.allDay) {
                console.log(`  ${dayName}: Available all day`);
              } else {
                const formattedHours = dayData.hours
                  .map(hour => formatHour(hour))
                  .join(', ');
                console.log(`  ${dayName}: Available at ${formattedHours}`);
              }
            } else {
              console.log(`  ${dayName}: Not available`);
            }
          });
          console.log('------------------------');
        });
      }
    }, [staff]);
    
    // Handle opening settings modal
    const handleOpenSettings = () => {
      setShowSettingsModal(true);
    };
  
    // Toggle custom workers display
    const toggleCustomWorkers = () => {
      setShowCustomWorkers(!showCustomWorkers);
    };
  
    // Update day-specific worker limits
    const updateCustomWorkerLimits = (day, field, value) => {
      setSettings({
        ...settings,
        customWorkersByDay: {
          ...settings.customWorkersByDay,
          [day]: {
            ...settings.customWorkersByDay[day],
            [field]: parseInt(value) || 0
          }
        }
      });
    };
  
    // Handle saving settings
    const handleSaveSettings = () => {
      console.log('Saved settings:', settings);
      setShowSettingsModal(false);
    };
    
    // Open availability modal instead of toggling
    const handleEditAvailability = (worker) => {
      setCurrentWorker({...worker});
      setShowAvailabilityModal(true);
    };
  
    // Handle generate schedule button click
    const handleGenerateSchedule = () => {
      console.log('Generating schedule for:', staff);
    };
  
    // Open the modal with a new worker
    const handleAddWorker = () => {
      setCurrentWorker({
        name: '',
        maxDays: 5,
        availability: {
          0: { available: false, allDay: false, hours: [] }, // Sunday
          1: { available: false, allDay: false, hours: [] }, // Monday
          2: { available: false, allDay: false, hours: [] }, // Tuesday
          3: { available: false, allDay: false, hours: [] }, // Wednesday
          4: { available: false, allDay: false, hours: [] }, // Thursday
          5: { available: false, allDay: false, hours: [] }, // Friday
          6: { available: false, allDay: false, hours: [] }  // Saturday
        }
      });
      setShowModal(true);
    };
  
    // Toggle availability for a specific day
    const toggleDayAvailability = (day) => {
      setCurrentWorker({
        ...currentWorker,
        availability: {
          ...currentWorker.availability,
          [day]: { 
            ...currentWorker.availability[day],
            available: !currentWorker.availability[day].available,
            // Reset hours if setting to unavailable
            hours: !currentWorker.availability[day].available ? [] : currentWorker.availability[day].hours,
            allDay: false
          }
        }
      });
    };
  
    // Toggle "all day" availability for a specific day
    const toggleAllDay = (day) => {
      const businessHours = [];
      // Store hours from 5 AM to 10 PM
      for (let i = 5; i <= 22; i++) {
        businessHours.push(i);
      }
  
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
  
    // Handle saving the worker
    const handleSaveWorker = () => {
      if (!currentWorker.name.trim()) {
        alert('Please enter a worker name');
        return;
      }
      
      // Check if at least one day is marked as available
      const hasAvailableDays = Object.values(currentWorker.availability).some(day => day.available);
      if (!hasAvailableDays) {
        alert('Please select at least one available day');
        return;
      }
      
      const newWorker = {
        ...currentWorker,
        id: currentWorker.id || Date.now(), // Use timestamp as a simple unique ID if new worker
      };
      
      setStaff([...staff, newWorker]);
      setShowModal(false);
    };
  
    // Handle saving the worker's updated availability
    const handleSaveAvailability = () => {
      // Check if at least one day is marked as available
      const hasAvailableDays = Object.values(currentWorker.availability).some(day => day.available);
      if (!hasAvailableDays) {
        alert('Please select at least one available day');
        return;
      }
      
      // Update worker in the staff array
      setStaff(staff.map(worker => 
        worker.id === currentWorker.id ? currentWorker : worker
      ));
      
      setShowAvailabilityModal(false);
      console.log('Updated availability for:', currentWorker.name);
    };
    
    // Handle removing a worker
    const handleRemoveWorker = () => {
      if (confirm(`Are you sure you want to remove ${currentWorker.name}?`)) {
        // Remove worker from staff array
        setStaff(staff.filter(worker => worker.id !== currentWorker.id));
        setShowAvailabilityModal(false);
        console.log('Removed worker:', currentWorker.name);
      }
    };
  
    // Format hour for display (convert to 12-hour format)
    const formatHour = (hour) => {
      const period = hour < 12 ? 'AM' : 'PM';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      return `${displayHour} ${period}`;
    };
  
    // Get day name from index
    const getDayName = (dayIndex) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[dayIndex];
    };
  
    // Business hours array (5 AM to 10 PM)
    const businessHours = Array.from({ length: 18 }, (_, i) => i + 5);
  
    return (
      <div className="creator-container">
        <div className="creator-header">
          <button className="settings-button" onClick={handleOpenSettings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
          <button className="add-button" onClick={handleAddWorker}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
  
        <div className="staff-list">
          {staff.map(person => (
            <div key={person.id} className="staff-item">
              <div className="staff-name">{person.name}</div>
              <button 
                className="availability-button"
                onClick={() => handleEditAvailability(person)}
              >
                Availability
              </button>
            </div>
          ))}
        </div>
  
        <div className="creator-footer">
          <button className="generate-button" onClick={handleGenerateSchedule}>
            Generate Schedule
          </button>
        </div>
  
        {/* Worker Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Add Worker</h2>
                <button className="close-button" onClick={() => setShowModal(false)}>×</button>
              </div>
              
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="workerName">Name:</label>
                  <input 
                    type="text" 
                    id="workerName" 
                    value={currentWorker.name} 
                    onChange={(e) => setCurrentWorker({...currentWorker, name: e.target.value})}
                    placeholder="Enter worker name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="maxDays">Maximum Days to Work:</label>
                  <input 
                    type="number" 
                    id="maxDays" 
                    min="1" 
                    max="7" 
                    value={currentWorker.maxDays} 
                    onChange={(e) => setCurrentWorker({...currentWorker, maxDays: parseInt(e.target.value) || 1})}
                  />
                </div>
                
                <div className="availability-section">
                  <h3>Availability</h3>
                  
                  {/* Days of the week */}
                  {[0, 1, 2, 3, 4, 5, 6].map(day => (
                    <div key={day} className="day-availability">
                      <div className="day-header">
                        <div className="day-controls">
                          <input 
                            type="checkbox" 
                            id={`day-${day}`} 
                            checked={currentWorker.availability[day].available}
                            onChange={() => toggleDayAvailability(day)}
                          />
                          <label htmlFor={`day-${day}`}>{getDayName(day)}</label>
                        </div>
                        
                        {currentWorker.availability[day].available && (
                          <div className="all-day-toggle">
                            <input 
                              type="checkbox" 
                              id={`allday-${day}`} 
                              checked={currentWorker.availability[day].allDay}
                              onChange={() => toggleAllDay(day)}
                            />
                            <label htmlFor={`allday-${day}`}>All Day</label>
                          </div>
                        )}
                      </div>
                      
                      {currentWorker.availability[day].available && !currentWorker.availability[day].allDay && (
                        <div className="hours-container">
                          {businessHours.map(hour => (
                            <div 
                              key={hour} 
                              className={`hour-checkbox ${currentWorker.availability[day].hours.includes(hour) ? 'selected' : ''}`}
                              onClick={() => toggleHourAvailability(day, hour)}
                            >
                              {formatHour(hour)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="modal-footer">
                <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="save-button" onClick={handleSaveWorker}>Save</button>
              </div>
            </div>
          </div>
        )}
  
        {/* Availability Edit Modal */}
        {showAvailabilityModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Edit {currentWorker.name}'s Availability</h2>
                <button className="close-button" onClick={() => setShowAvailabilityModal(false)}>×</button>
              </div>
              
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="editMaxDays">Maximum Days to Work:</label>
                  <input 
                    type="number" 
                    id="editMaxDays" 
                    min="1" 
                    max="7" 
                    value={currentWorker.maxDays} 
                    onChange={(e) => setCurrentWorker({...currentWorker, maxDays: parseInt(e.target.value) || 1})}
                  />
                </div>
                
                <div className="availability-section">
                  <h3>Availability</h3>
                  
                  {/* Days of the week */}
                  {[0, 1, 2, 3, 4, 5, 6].map(day => (
                    <div key={day} className="day-availability">
                      <div className="day-header">
                        <div className="day-controls">
                          <input 
                            type="checkbox" 
                            id={`edit-day-${day}`} 
                            checked={currentWorker.availability[day].available}
                            onChange={() => toggleDayAvailability(day)}
                          />
                          <label htmlFor={`edit-day-${day}`}>{getDayName(day)}</label>
                        </div>
                        
                        {currentWorker.availability[day].available && (
                          <div className="all-day-toggle">
                            <input 
                              type="checkbox" 
                              id={`edit-allday-${day}`} 
                              checked={currentWorker.availability[day].allDay}
                              onChange={() => toggleAllDay(day)}
                            />
                            <label htmlFor={`edit-allday-${day}`}>All Day</label>
                          </div>
                        )}
                      </div>
                      
                      {currentWorker.availability[day].available && !currentWorker.availability[day].allDay && (
                        <div className="hours-container">
                          {businessHours.map(hour => (
                            <div 
                              key={hour} 
                              className={`hour-checkbox ${currentWorker.availability[day].hours.includes(hour) ? 'selected' : ''}`}
                              onClick={() => toggleHourAvailability(day, hour)}
                            >
                              {formatHour(hour)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="modal-footer">
                <button className="remove-worker-button" onClick={handleRemoveWorker}>Remove Worker</button>
                <div>
                  <button className="cancel-button" onClick={() => setShowAvailabilityModal(false)}>Cancel</button>
                  <button className="save-button" onClick={handleSaveAvailability}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        )}
  
        {/* Settings Modal */}
        {showSettingsModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Schedule Settings</h2>
                <button className="close-button" onClick={() => setShowSettingsModal(false)}>×</button>
              </div>
              
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="minWorkersPerShift">Minimum Workers Per Shift:</label>
                  <input 
                    type="number" 
                    id="minWorkersPerShift" 
                    min="1" 
                    value={settings.minWorkersPerShift} 
                    onChange={(e) => setSettings({...settings, minWorkersPerShift: parseInt(e.target.value) || 1})}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="maxWorkersTotal">Maximum Workers Total:</label>
                  <input 
                    type="number" 
                    id="maxWorkersTotal" 
                    min="1" 
                    value={settings.maxWorkersTotal} 
                    onChange={(e) => setSettings({...settings, maxWorkersTotal: parseInt(e.target.value) || 1})}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="minHoursPerWorker">Minimum Hours Per Worker:</label>
                  <input 
                    type="number" 
                    id="minHoursPerWorker" 
                    min="1" 
                    max="24" 
                    value={settings.minHoursPerWorker} 
                    onChange={(e) => setSettings({...settings, minHoursPerWorker: parseInt(e.target.value) || 1})}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="maxHoursPerWorker">Maximum Hours Per Worker:</label>
                  <input 
                    type="number" 
                    id="maxHoursPerWorker" 
                    min="1" 
                    max="24" 
                    value={settings.maxHoursPerWorker} 
                    onChange={(e) => setSettings({...settings, maxHoursPerWorker: parseInt(e.target.value) || 1})}
                  />
                </div>
                
                <div className="custom-workers-toggle">
                  <button 
                    className={`custom-workers-button ${showCustomWorkers ? 'active' : ''}`} 
                    onClick={toggleCustomWorkers}
                  >
                    {showCustomWorkers ? 'Hide Custom Worker Limits' : 'Show Custom Worker Limits'}
                  </button>
                </div>
                
                {showCustomWorkers && (
                  <div className="custom-workers-section">
                    <h3>Custom Worker Limits by Day</h3>
                    
                    {[0, 1, 2, 3, 4, 5, 6].map(day => (
                      <div key={day} className="day-settings">
                        <div className="day-name">{getDayName(day)}</div>
                        <div className="day-inputs">
                          <div className="min-input">
                            <label htmlFor={`min-workers-${day}`}>Min:</label>
                            <input 
                              type="number" 
                              id={`min-workers-${day}`} 
                              min="0" 
                              value={settings.customWorkersByDay[day].min} 
                              onChange={(e) => updateCustomWorkerLimits(day, 'min', e.target.value)}
                            />
                          </div>
                          <div className="max-input">
                            <label htmlFor={`max-workers-${day}`}>Max:</label>
                            <input 
                              type="number" 
                              id={`max-workers-${day}`} 
                              min="0" 
                              value={settings.customWorkersByDay[day].max} 
                              onChange={(e) => updateCustomWorkerLimits(day, 'max', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                <button className="cancel-button" onClick={() => setShowSettingsModal(false)}>Cancel</button>
                <button className="save-button" onClick={handleSaveSettings}>Save Settings</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Creator;