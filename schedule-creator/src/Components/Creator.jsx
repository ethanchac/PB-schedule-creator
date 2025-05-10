import {useState, useEffect} from 'react';
import './Creator.css';
import { useAuth } from '../contexts/AuthContext';
import { 
  savePerson, 
  deletePerson,
  getPeople,
  saveAvailability,
  getAllAvailability,
  deleteAvailability
} from '../services/databaseService';
import Popup from './Popup';

function Creator() {
    const [staff, setStaff] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
    const [showCustomWorkers, setShowCustomWorkers] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const { currentUser } = useAuth();
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
    
    // Load data from Firebase when component mounts
    useEffect(() => {
      async function loadData() {
        if (currentUser) {
          try {
            setLoading(true);
            console.log("Loading people data for user:", currentUser.uid);
            const peopleData = await getPeople(currentUser.uid);
            console.log("Data loaded successfully:", peopleData);
            setStaff(peopleData);
            
            // Load settings from Firebase if you want to persist them
            // This would require adding a settings service to databaseService.js
            
          } catch (error) {
            console.error("Error loading data:", error);
            alert(`Error loading data: ${error.message || 'Unknown error'}`);
          } finally {
            setLoading(false);
          }
        } else {
          console.warn("No current user found - authentication may be required");
          setLoading(false);
        }
      }
      
      loadData();
    }, [currentUser]);
    
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
      
      // Optional: Save settings to Firebase
      // This would require adding a settings service to databaseService.js
    };
    
    // Open availability modal with selected worker
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
      // Initialize a new worker with default values
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
      // Show the modal for adding a new worker
      setShowModal(true);
    };
  
    // Handle saving the worker
    const handleSaveWorker = async (updatedWorker) => {
      // Input validation
      if (!updatedWorker.name.trim()) {
        alert('Please enter a worker name');
        return;
      }
      
      // Check if at least one day is marked as available
      const hasAvailableDays = Object.values(updatedWorker.availability).some(day => day.available);
      if (!hasAvailableDays) {
        alert('Please select at least one available day');
        return;
      }
      
      // Authentication check
      if (!currentUser) {
        alert("You need to be logged in to save workers.");
        return;
      }
      
      // Set saving state to show UI feedback
      setIsSaving(true);
      
      try {
        console.log("Creating new worker object");
        // Ensure ID is a string
        const workerId = updatedWorker.id || Date.now().toString();
        
        const newWorker = {
          ...updatedWorker,
          id: workerId,
          // Make sure to include timestamps for tracking
          createdAt: updatedWorker.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        console.log("Worker to save:", newWorker);
        console.log("User ID:", currentUser.uid);
        
        // Save worker to Firebase - with timeout handling
        console.log("Attempting to save to Firebase...");
        
        // Create a timeout promise to catch hanging requests
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Save operation timed out. The database might be unavailable.")), 10000);
        });
        
        // Race the save operation against the timeout
        const result = await Promise.race([
          savePerson(currentUser.uid, newWorker),
          timeoutPromise
        ]);
        
        console.log("Firebase save result:", result);
        
        // To be extra safe, verify the save worked by trying to retrieve the worker
        try {
          const updatedPeople = await getPeople(currentUser.uid);
          const savedWorker = updatedPeople.find(w => w.id === workerId);
          
          if (!savedWorker) {
            throw new Error("Worker was saved but couldn't be verified in the database. Refresh the page to check if it was saved.");
          }
          
          // Update the staff list with the verified data
          setStaff(updatedPeople);
        } catch (verifyError) {
          console.error("Error verifying save:", verifyError);
          // Still update the local state even if verification failed
          setStaff(prevStaff => [...prevStaff, newWorker]);
        }
        
        // Close the modal
        setShowModal(false);
        
        // Show success message
        alert('Worker saved successfully!');
        console.log('Saved worker to database:', newWorker.name);
      } catch (error) {
        console.error('Error saving worker:', error);
        
        // Enhanced error handling with specific messages
        let errorMessage = "Failed to save worker. ";
        
        if (error.code === 'permission-denied') {
          errorMessage += "You don't have permission to save data. Please check your account permissions.";
        } else if (error.message && error.message.includes('timeout')) {
          errorMessage += "The operation timed out. Please check your internet connection and try again.";
        } else if (error.message && error.message.includes('network')) {
          errorMessage += "Network error. Please check your internet connection and try again.";
        } else {
          errorMessage += "Error: " + (error.message || 'Unknown error');
        }
        
        alert(errorMessage);
      } finally {
        // Always reset the saving state
        setIsSaving(false);
      }
    };
  
    // Handle saving worker availability from the ImprovedAvailabilitySelector component
    const handleSaveAvailability = async (updatedWorker) => {
      try {
        // Add timestamp
        const workerToSave = {
          ...updatedWorker,
          updatedAt: new Date().toISOString()
        };
        
        // Update worker in Firebase
        await savePerson(currentUser.uid, workerToSave);
        
        // Update worker in the staff array
        setStaff(prevStaff => prevStaff.map(worker => 
          worker.id === workerToSave.id ? workerToSave : worker
        ));
        
        setShowAvailabilityModal(false);
        console.log('Updated availability for:', workerToSave.name);
      } catch (error) {
        console.error('Error updating worker:', error);
        alert('Failed to update worker. Please try again. Error: ' + error.message);
      }
    };
    
    // Handle removing a worker
    const handleRemoveWorker = async (workerToRemove) => {
      if (confirm(`Are you sure you want to remove ${workerToRemove.name}?`)) {
        try {
          // Remove worker from Firebase
          await deletePerson(currentUser.uid, workerToRemove.id);
          
          // Remove worker from staff array
          setStaff(prevStaff => prevStaff.filter(worker => worker.id !== workerToRemove.id));
          setShowAvailabilityModal(false);
          console.log('Removed worker:', workerToRemove.name);
        } catch (error) {
          console.error('Error removing worker:', error);
          alert('Failed to remove worker. Please try again. Error: ' + error.message);
        }
      }
    };
  
    // Get day name from index
    const getDayName = (dayIndex) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[dayIndex];
    };

    if (loading) {
      return (
        <div className="loading">Loading...</div>
      );
    }

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
  
        {/* Show status messages */}
        {isSaving && (
          <div className="status-message saving">
            Saving... Please wait.
          </div>
        )}
  
        <div className="staff-list">
          {staff.length > 0 ? (
            staff.map(person => (
              <div key={person.id} className="staff-item">
                <div className="staff-name">{person.name}</div>
                <button 
                  className="availability-button"
                  onClick={() => handleEditAvailability(person)}
                >
                  Availability
                </button>
              </div>
            ))
          ) : (
            <div className="no-staff-message">
              No workers added yet. Click the + button to add a worker.
            </div>
          )}
        </div>
  
        <div className="creator-footer">
          <button 
            className="generate-button" 
            onClick={handleGenerateSchedule}
            disabled={staff.length === 0}
          >
            Generate Schedule
          </button>
        </div>
  
        {/* Add Worker Modal - Now using the Popup component with close button for name input */}
        {showModal && (
          <div className="modal-overlay">
            <div className="worker-name-input-wrapper relative">
              <button 
                className="popup-close-button" 
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <input 
                type="text" 
                placeholder="Enter worker name"
                value={currentWorker.name} 
                onChange={(e) => setCurrentWorker({...currentWorker, name: e.target.value})}
                className="worker-name-input"
              />
            </div>
            <Popup 
              worker={currentWorker}
              onSave={handleSaveWorker}
              onCancel={() => setShowModal(false)}
              modalTitle="Add New Worker"
            />
          </div>
        )}
  
        {/* Availability Edit Modal - Using the Popup component */}
        {showAvailabilityModal && (
          <div className="modal-overlay">
            <Popup 
              worker={currentWorker}
              onSave={handleSaveAvailability}
              onCancel={() => setShowAvailabilityModal(false)}
              onRemove={handleRemoveWorker}
              modalTitle={`Edit ${currentWorker.name}'s Availability`}
            />
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
                <button 
                  className="cancel-button" 
                  onClick={() => setShowSettingsModal(false)}
                  style={{ backgroundColor: "rgb(0, 35, 92)", color: "white" }}
                >
                  Cancel
                </button>
                <button 
                  className="save-button" 
                  onClick={handleSaveSettings}
                  style={{ backgroundColor: "rgb(0, 35, 92)", color: "white" }}
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Creator;