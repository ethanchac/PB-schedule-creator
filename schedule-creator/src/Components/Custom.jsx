// Custom.js
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  getPeople, 
  getAllAvailability, 
  saveAvailability
} from '../services/databaseService';
import './Custom.css';

function Custom() {
    const { currentUser } = useAuth();
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
    const [timeSlotForm, setTimeSlotForm] = useState({
        startTime: "05:00",
        endTime: "13:00",
        requiredWorkers: 1,
        label: "5 AM-1 PM"
    });
    // Initial predefined time slots - starting with none
    const [timeSlots, setTimeSlots] = useState([]);
    const [schedule, setSchedule] = useState({});
    const [currentDrag, setCurrentDrag] = useState(null);
    const [saving, setSaving] = useState(false);
    const [currentWeek, setCurrentWeek] = useState([]);
    
    // Reference to store the drag source element for styling
    const dragSourceRef = useRef(null);
    
    // Initialize the week
    useEffect(() => {
        generateWeekDays(new Date());
    }, []);
    
    // Initialize schedule structure based on time slots
    useEffect(() => {
        if (timeSlots.length > 0 && currentWeek.length > 0) {
            const initialSchedule = {};
            
            // For each day (0=Sunday through 6=Saturday in array)
            currentWeek.forEach((day, dayIndex) => {
                const dayStr = dayIndex.toString();
                initialSchedule[dayStr] = {};
                
                // For each time slot
                timeSlots.forEach((slot, slotIndex) => {
                    initialSchedule[dayStr][slotIndex.toString()] = {
                        workers: [],
                        required: slot.requiredWorkers,
                        start: slot.startTime,
                        end: slot.endTime
                    };
                });
            });
            
            setSchedule(initialSchedule);
        }
    }, [timeSlots, currentWeek]);

    // Generate array of dates for current week
    const generateWeekDays = (date) => {
        const days = [];
        const dayOfWeek = date.getDay();
        const sundayOffset = dayOfWeek === 0 ? 0 : -dayOfWeek; // If Sunday, start at Sunday, otherwise go back to previous Sunday
        
        const startDate = new Date(date);
        startDate.setDate(date.getDate() + sundayOffset);
        
        // Generate 7 days starting from Sunday
        for (let i = 0; i < 7; i++) {
            const day = new Date(startDate);
            day.setDate(startDate.getDate() + i);
            days.push(day);
        }
        
        setCurrentWeek(days);
    };

    // Load data from Firebase when component mounts
    useEffect(() => {
        async function loadData() {
            if (currentUser) {
                try {
                    setLoading(true);
                    console.log("Loading people data for user:", currentUser.uid);
                    
                    // Get all people
                    const peopleData = await getPeople(currentUser.uid);
                    console.log("People data loaded successfully:", peopleData);
                    
                    // Process the staff data to track schedule assignment
                    const processedStaff = peopleData.map(person => ({
                        ...person,
                        assigned: 0, // Initially assigned to 0 days
                        assignments: {} // Track specific assignments
                    }));
                    
                    setStaff(processedStaff);
                    setError(null);
                    
                    // Try to load saved schedule if it exists
                    try {
                        const allAvailabilityData = await getAllAvailability(currentUser.uid);
                        if (allAvailabilityData && allAvailabilityData.length > 0) {
                            // Find the custom schedule if it exists
                            const savedSchedule = allAvailabilityData.find(item => item.id === 'custom-schedule');
                            
                            if (savedSchedule && savedSchedule.timeSlots && savedSchedule.schedule) {
                                console.log("Found saved schedule:", savedSchedule);
                                setTimeSlots(savedSchedule.timeSlots);
                                setSchedule(savedSchedule.schedule);
                            } else {
                                // Add default time slots if no schedule exists
                                setTimeSlots([]);
                            }
                        } else {
                            // Add default time slots if no availability data exists
                            setTimeSlots([]);
                        }
                    } catch (loadError) {
                        console.error("Error loading saved schedule:", loadError);
                        // Add default time slots if error loading
                        setTimeSlots([]);
                    }
                    
                } catch (err) {
                    console.error("Error loading data:", err);
                    setError(`Error loading data: ${err.message || 'Unknown error'}`);
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

    // Helper function to get day name from index (order: SAT, SUN, MON, TUE, WED, THURS, FRIDAY)
    const getDayName = (dayIndex) => {
        const days = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRIDAY'];
        // Reorder to match image: SAT first, then SUN-FRI
        const reorderedIndex = (dayIndex + 1) % 7;
        return days[reorderedIndex];
    };
    
    // Format date to display format MM/DD
    const formatDate = (date) => {
        if (!date) return '';
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}`;
    };
    
    // Get day date for display, with reordering
    const getDayDate = (index) => {
        // Reorder to match image: SAT first, then SUN-FRI
        const reorderedIndex = (index + 1) % 7;
        if (currentWeek && currentWeek[index]) {
            return formatDate(currentWeek[index]);
        }
        return '';
    };
    
    // Convert 24h time string (HH:MM) to display format
    const formatTime = (timeString) => {
        if (!timeString) return '';
        
        const [hours, minutes] = timeString.split(':').map(Number);
        let period = 'AM';
        let displayHours = hours;
        
        if (hours >= 12) {
            period = 'PM';
            displayHours = hours === 12 ? 12 : hours - 12;
        }
        if (hours === 0) {
            displayHours = 12;
        }
        
        return `${displayHours}${minutes > 0 ? ':' + minutes.toString().padStart(2, '0') : ''} ${period}`;
    };
    
    // Convert hour (number) to HH:MM format
    const hourToTimeString = (hour) => {
        return `${hour.toString().padStart(2, '0')}:00`;
    };
    
    // Check if a worker is available at a specific day and time slot
    const isWorkerAvailable = (worker, dayIndex, timeSlot) => {
        if (!worker || !timeSlot) return false;
        
        // Get the day number (0-6, Sunday-Saturday)
        const day = dayIndex;
        
        // If worker isn't available on this day, return false
        const dayAvailability = worker.availability?.[day];
        if (!dayAvailability || !dayAvailability.available) {
            return false;
        }
        
        // If worker is available all day, they can work any shift
        if (dayAvailability.allDay) {
            return true;
        }
        
        // Parse time slot times
        const slotStartHour = parseInt(timeSlot.start.split(':')[0], 10);
        const slotEndHour = parseInt(timeSlot.end.split(':')[0], 10);
        
        // Check if all hours in the time slot are in the worker's availability
        for (let hour = slotStartHour; hour < slotEndHour; hour++) {
            if (!dayAvailability.hours.includes(hour)) {
                return false;
            }
        }
        
        return true;
    };
    
    // Add a new time slot
    const handleAddTimeSlot = () => {
        const { startTime, endTime, requiredWorkers, label } = timeSlotForm;
        
        // Basic validation
        const startHour = parseInt(startTime.split(':')[0], 10);
        const endHour = parseInt(endTime.split(':')[0], 10);
        
        if (startHour >= endHour) {
            alert("End time must be after start time");
            return;
        }
        
        if (requiredWorkers < 1) {
            alert("At least one worker is required");
            return;
        }
        
        // Create new time slot
        const newTimeSlot = {
            id: Date.now(), // Generate unique ID
            startTime,
            endTime,
            requiredWorkers: parseInt(requiredWorkers, 10),
            label: label || `${formatTime(startTime)}-${formatTime(endTime)}`
        };
        
        // Add to time slots
        setTimeSlots([...timeSlots, newTimeSlot]);
        
        // Close modal
        setShowTimeSlotModal(false);
        
        // Reset form
        setTimeSlotForm({
            startTime: "05:00",
            endTime: "13:00",
            requiredWorkers: 1,
            label: "5 AM-1 PM"
        });
    };
    
    // Remove a time slot and return all assigned workers to the available pool
    const handleRemoveTimeSlot = (index) => {
        if (window.confirm("Remove this time slot? This will clear any scheduled workers for this slot.")) {
            const updatedTimeSlots = timeSlots.filter((_, i) => i !== index);
            
            // Update schedule to remove this time slot and create a new schedule object
            const newSchedule = { ...schedule };
            
            // Collect all workers assigned to this time slot across all days
            // so we can properly return them to the available pool
            const affectedWorkers = new Set();
            
            // For each day
            Object.keys(newSchedule).forEach(day => {
                // If this slot exists and has workers, add them to the set of affected workers
                if (newSchedule[day][index] && newSchedule[day][index].workers) {
                    newSchedule[day][index].workers.forEach(workerId => {
                        affectedWorkers.add(workerId);
                    });
                }
                
                // Remove the time slot
                if (newSchedule[day][index]) {
                    delete newSchedule[day][index];
                }
                
                // Renumber the remaining slots to maintain continuity
                const tempSlots = {};
                Object.keys(newSchedule[day])
                    .filter(slotIndex => parseInt(slotIndex) !== index)
                    .forEach(slotIndex => {
                        const newIndex = parseInt(slotIndex) > index ? 
                            (parseInt(slotIndex) - 1).toString() : slotIndex;
                        tempSlots[newIndex] = newSchedule[day][slotIndex];
                    });
                
                newSchedule[day] = tempSlots;
            });
            
            // Update time slots state
            setTimeSlots(updatedTimeSlots);
            
            // Update schedule state with the new schedule
            setSchedule(newSchedule);
            
            // Update staff assignments based on the new schedule
            // This will automatically recalculate assigned days for all workers
            updateStaffAssignments(newSchedule);
            
            // Log the workers who were affected
            console.log("Workers freed from removed time slot:", Array.from(affectedWorkers));
        }
    };
    
    // Handle starting a drag operation
    const handleDragStart = (e, workerId) => {
        const worker = staff.find(w => w.id === workerId);
        
        if (!worker) return;
        
        // If worker has reached max days, don't allow further assignment
        if (worker.assigned >= worker.maxDays) {
            e.preventDefault();
            return;
        }
        
        // Set the current drag
        setCurrentDrag(workerId);
        
        // Store the source element for styling
        dragSourceRef.current = e.target;
        e.target.classList.add('dragging');
        
        // Set data for the drag operation
        e.dataTransfer.setData("workerId", workerId);
        e.dataTransfer.effectAllowed = "move";
    };
    
    // Handle drag end
    const handleDragEnd = (e) => {
        setCurrentDrag(null);
        
        // Remove dragging style if reference exists
        if (dragSourceRef.current) {
            dragSourceRef.current.classList.remove('dragging');
            dragSourceRef.current = null;
        }
    };
    
    // Handle drag over a drop target
    const handleDragOver = (e, dayIndex, slotIndex) => {
        e.preventDefault();
        
        if (!currentDrag) return;
        
        const worker = staff.find(w => w.id === currentDrag);
        const timeSlot = timeSlots[slotIndex];
        const day = dayIndex.toString();
        const slot = schedule[day]?.[slotIndex];
        
        if (!worker || !timeSlot || !slot) {
            e.dataTransfer.dropEffect = "none";
            e.currentTarget.classList.add('invalid-drop-target');
            return;
        }
        
        // Check if drop is allowed
        const isAvailable = isWorkerAvailable(worker, dayIndex, {
            start: timeSlot.startTime,
            end: timeSlot.endTime
        });
        
        const isSlotFull = slot.workers?.length >= slot.required;
        const isAlreadyAssigned = slot.workers?.includes(currentDrag);
        
        if (isAvailable && !isSlotFull && !isAlreadyAssigned) {
            e.dataTransfer.dropEffect = "move";
            e.currentTarget.classList.add('valid-drop-target');
        } else {
            e.dataTransfer.dropEffect = "none";
            e.currentTarget.classList.add('invalid-drop-target');
        }
    };
    
    // Handle drag leave
    const handleDragLeave = (e) => {
        e.currentTarget.classList.remove('valid-drop-target', 'invalid-drop-target');
    };
    
    // Handle drop event
    const handleDrop = (e, dayIndex, slotIndex) => {
        e.preventDefault();
        
        // Remove drop target highlighting
        e.currentTarget.classList.remove('valid-drop-target', 'invalid-drop-target');
        
        // Get the worker ID from the drag data
        const workerId = e.dataTransfer.getData("workerId");
        
        if (!workerId) return;
        
        const worker = staff.find(w => w.id === workerId);
        const timeSlot = timeSlots[slotIndex];
        const day = dayIndex.toString();
        
        // Ensure the needed objects exist
        if (!worker || !timeSlot) return;
        if (!schedule[day]) schedule[day] = {};
        if (!schedule[day][slotIndex]) {
            schedule[day][slotIndex] = {
                workers: [],
                required: timeSlot.requiredWorkers,
                start: timeSlot.startTime,
                end: timeSlot.endTime
            };
        }
        
        const slot = schedule[day][slotIndex];
        
        // Check if drop is allowed
        const isAvailable = isWorkerAvailable(worker, dayIndex, {
            start: timeSlot.startTime,
            end: timeSlot.endTime
        });
        
        const isSlotFull = slot.workers?.length >= slot.required;
        const isAlreadyAssigned = slot.workers?.includes(workerId);
        
        if (isAvailable && !isSlotFull && !isAlreadyAssigned) {
            // Add worker to this slot
            const newSchedule = JSON.parse(JSON.stringify(schedule));
            newSchedule[day][slotIndex].workers = [...(slot.workers || []), workerId];
            setSchedule(newSchedule);
            
            // Update staff assignments
            updateStaffAssignments(newSchedule);
        }
    };
    
    // Update staff assignments based on the schedule
    const updateStaffAssignments = (newSchedule) => {
        // Create a map to track which days each worker is assigned to
        const assignmentMap = {};
        
        // Initialize map for all staff members
        staff.forEach(worker => {
            assignmentMap[worker.id] = {
                days: new Set(),
                slots: {}
            };
        });
        
        // Build the assignment map based on schedule
        Object.entries(newSchedule).forEach(([day, slots]) => {
            if (!slots) return;
            
            Object.entries(slots).forEach(([slotIndex, slotData]) => {
                if (!slotData || !slotData.workers) return;
                
                slotData.workers.forEach(workerId => {
                    if (assignmentMap[workerId]) {
                        assignmentMap[workerId].days.add(parseInt(day));
                        
                        if (!assignmentMap[workerId].slots[day]) {
                            assignmentMap[workerId].slots[day] = [];
                        }
                        
                        assignmentMap[workerId].slots[day].push(parseInt(slotIndex));
                    }
                });
            });
        });
        
        // Update staff state with assignment info
        const updatedStaff = staff.map(worker => ({
            ...worker,
            assigned: assignmentMap[worker.id] ? assignmentMap[worker.id].days.size : 0,
            assignments: assignmentMap[worker.id] ? assignmentMap[worker.id].slots : {}
        }));
        
        setStaff(updatedStaff);
    };
    
    // Remove a worker from a time slot
    const removeWorkerFromSlot = (workerId, day, slotIndex) => {
        const newSchedule = {...schedule};
        
        if (newSchedule[day] && newSchedule[day][slotIndex] && newSchedule[day][slotIndex].workers) {
            newSchedule[day][slotIndex].workers = newSchedule[day][slotIndex].workers.filter(id => id !== workerId);
            setSchedule(newSchedule);
            
            // Update staff assignments
            updateStaffAssignments(newSchedule);
        }
    };
    
    // Click handler for schedule cell
    const handleCellClick = (dayIndex, slotIndex) => {
        const day = dayIndex.toString();
        const slot = schedule[day]?.[slotIndex];
        
        if (!slot) return;
        
        // Show a popup or handle cell click as needed
        console.log("Cell clicked:", day, slotIndex, slot);
    };
    
    // Clear the entire schedule
    const clearSchedule = () => {
        if (window.confirm("Are you sure you want to clear the entire schedule? This cannot be undone.")) {
            const newSchedule = {...schedule};
            
            // Remove all worker assignments but keep time slot structure
            Object.keys(newSchedule).forEach(day => {
                if (newSchedule[day]) {
                    Object.keys(newSchedule[day]).forEach(slotIndex => {
                        if (newSchedule[day][slotIndex]) {
                            newSchedule[day][slotIndex].workers = [];
                        }
                    });
                }
            });
            
            setSchedule(newSchedule);
            
            // Update staff assignments
            updateStaffAssignments(newSchedule);
        }
    };
    
    // Save the schedule to Firebase
    const saveSchedule = async () => {
        if (!currentUser) {
            alert("You must be logged in to save the schedule");
            return;
        }
        
        setSaving(true);
        
        try {
            // Create a schedule object to save
            const scheduleData = {
                id: 'custom-schedule', // Use a fixed ID for the custom schedule
                timeSlots: timeSlots,
                schedule: schedule,
                updatedAt: new Date().toISOString(),
                createdAt: new Date().toISOString()
            };
            
            await saveAvailability(currentUser.uid, scheduleData);
            alert("Schedule saved successfully!");
        } catch (err) {
            console.error("Error saving schedule:", err);
            alert(`Error saving schedule: ${err.message || 'Unknown error'}`);
        } finally {
            setSaving(false);
        }
    };
    
    // Get the names and IDs of workers assigned to a slot
    const getAssignedWorkerInfo = (dayIndex, slotIndex) => {
        const day = dayIndex.toString();
        const slot = schedule[day]?.[slotIndex];
        
        if (!slot || !slot.workers || slot.workers.length === 0) {
            return null;
        }
        
        return slot.workers.map(workerId => {
            const worker = staff.find(w => w.id === workerId);
            return worker ? { id: workerId, name: worker.name } : null;
        }).filter(info => info);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="custom-container">
            <h2>Weekly Schedule</h2>
            
            {staff.length > 0 ? (
                <div className="weekly-schedule-builder">
                    <div className="schedule-controls">
                        <button 
                            className="add-time-slot-button" 
                            onClick={() => setShowTimeSlotModal(true)}
                        >
                            Add Time Slot
                        </button>
                        
                        <button 
                            className="clear-schedule-button" 
                            onClick={clearSchedule}
                            disabled={timeSlots.length === 0}
                        >
                            Clear Schedule
                        </button>
                        
                        <button 
                            className="save-schedule-button" 
                            onClick={saveSchedule}
                            disabled={saving || timeSlots.length === 0}
                        >
                            {saving ? 'Saving...' : 'Save Schedule'}
                        </button>
                    </div>
                    
                    <div className="weekly-schedule-workspace">
                        {/* Schedule Grid - now with horizontal scrolling wrapper */}             
                        <div className="weekly-schedule-grid-container">
                            <div className="weekly-schedule-grid">
                                {/* Header Row with Days */}
                                <div className="weekly-header-row">
                                    <div className="weekly-time-column-header"></div>
                                    {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                                        <div key={`day-header-${index}`} className="weekly-day-header">
                                            <div className="weekly-day-name">{getDayName(index)}</div>
                                            <div className="weekly-day-date">{getDayDate(index)}</div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Show empty state message if no time slots */}
                                {timeSlots.length === 0 ? (
                                    <div className="empty-schedule-message">
                                        No time slots added yet. Click "Add Time Slot" to create your schedule.
                                    </div>
                                ) : (
                                    /* Time Slots Rows */
                                    <div className="weekly-timeslots-container">
                                        {timeSlots.map((slot, slotIndex) => (
                                            <div key={`time-slot-${slotIndex}`} className="weekly-time-row">
                                                <div className="weekly-time-label">
                                                    {slot.label}
                                                    <div className="weekly-slot-actions">
                                                        <button
                                                            className="weekly-remove-slot-button"
                                                            onClick={() => handleRemoveTimeSlot(slotIndex)}
                                                            title="Remove time slot"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                {/* Day cells for this time slot */}
                                                {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                                                    const workerInfo = getAssignedWorkerInfo(dayIndex, slotIndex);
                                                    const isAvailable = true; // Can enhance with day-specific availability
                                                    
                                                    return (
                                                        <div
                                                            key={`cell-${dayIndex}-${slotIndex}`}
                                                            className={`weekly-schedule-cell ${isAvailable ? 'available' : 'unavailable'} ${workerInfo ? 'has-workers' : 'empty'}`}
                                                            onClick={() => handleCellClick(dayIndex, slotIndex)}
                                                            onDragOver={(e) => isAvailable && handleDragOver(e, dayIndex, slotIndex)}
                                                            onDragLeave={handleDragLeave}
                                                            onDrop={(e) => isAvailable && handleDrop(e, dayIndex, slotIndex)}
                                                        >
                                                            {workerInfo && workerInfo.map((worker, i) => (
                                                                <div key={`worker-${i}`} className="assigned-worker-container">
                                                                    <div className="assigned-worker-name">
                                                                        {worker.name}
                                                                    </div>
                                                                    <button 
                                                                        className="remove-worker-button" 
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            removeWorkerFromSlot(worker.id, dayIndex.toString(), slotIndex);
                                                                        }}
                                                                        title="Remove worker"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Staff Workers Container */}
                        <div className="weekly-staff-container">
                            <h3>Available Staff</h3>
                            <div className="weekly-staff-grid">
                                {staff.map(worker => (
                                    <div 
                                        key={worker.id}
                                        className={`weekly-staff-block ${worker.assigned >= worker.maxDays ? 'fully-assigned' : ''}`}
                                        draggable={worker.assigned < worker.maxDays}
                                        onDragStart={(e) => handleDragStart(e, worker.id)}
                                        onDragEnd={handleDragEnd}
                                    >
                                        <div className="weekly-staff-name">{worker.name}</div>
                                        <div className="weekly-staff-status">
                                            <span className="weekly-assignment-count">{worker.assigned}/{worker.maxDays}</span> days assigned
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="weekly-staff-help">
                                <p>Drag a worker to a time slot to assign them. Workers will only be assigned if they are available during that time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="no-data">
                    <p>No staff data available. Please add workers in the Home page first.</p>
                </div>
            )}
            
            {/* Time Slot Modal */}
            {showTimeSlotModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Add Time Slot</h3>
                            <button 
                                className="modal-close-button" 
                                onClick={() => setShowTimeSlotModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="startTime">Start Time:</label>
                                <select
                                    id="startTime"
                                    value={timeSlotForm.startTime}
                                    onChange={(e) => setTimeSlotForm({...timeSlotForm, startTime: e.target.value})}
                                >
                                    {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(hour => (
                                        <option key={hour} value={hourToTimeString(hour)}>
                                            {formatTime(hourToTimeString(hour))}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="endTime">End Time:</label>
                                <select
                                    id="endTime"
                                    value={timeSlotForm.endTime}
                                    onChange={(e) => setTimeSlotForm({...timeSlotForm, endTime: e.target.value})}
                                >
                                    {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(hour => (
                                        <option key={hour} value={hourToTimeString(hour)}>
                                            {formatTime(hourToTimeString(hour))}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="label">Label (e.g. "5 AM-1 PM"):</label>
                                <input
                                    type="text"
                                    id="label"
                                    value={timeSlotForm.label}
                                    onChange={(e) => setTimeSlotForm({...timeSlotForm, label: e.target.value})}
                                    placeholder="Enter a label for this time slot"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="requiredWorkers">Required Workers:</label>
                                <input
                                    type="number"
                                    id="requiredWorkers"
                                    min="1"
                                    max="10"
                                    value={timeSlotForm.requiredWorkers}
                                    onChange={(e) => setTimeSlotForm({...timeSlotForm, requiredWorkers: parseInt(e.target.value) || 1})}
                                />
                            </div>
                        </div>
                        
                        <div className="modal-footer">
                            <button 
                                className="modal-cancel-button" 
                                onClick={() => setShowTimeSlotModal(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="modal-add-button" 
                                onClick={handleAddTimeSlot}
                            >
                                Add Time Slot
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Custom;