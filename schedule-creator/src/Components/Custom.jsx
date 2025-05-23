// Custom.js - Updated to navigate to Final.jsx instead of showing inline view
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { 
  getPeople, 
  getAllAvailability, 
  saveAvailability
} from '../services/databaseService';
import './Custom.css';

function Custom() {
    const { currentUser } = useAuth();
    const navigate = useNavigate(); // For navigation to Final component
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
    const [hasBeenSaved, setHasBeenSaved] = useState(false);
    
    // Reference to store the drag source element for styling
    const dragSourceRef = useRef(null);
    
    // For touch devices - track touch state
    const [touchDrag, setTouchDrag] = useState(null);
    const touchTimerRef = useRef(null);
    const scrollPositionRef = useRef({ x: 0, y: 0 });
    
    // Helper function to ensure consistent ID types
    const ensureConsistentIds = (scheduleData) => {
        // Deep copy to avoid mutating original
        const fixedSchedule = JSON.parse(JSON.stringify(scheduleData));
        
        // Process each day and slot to ensure worker IDs are strings
        Object.keys(fixedSchedule).forEach(day => {
            if (fixedSchedule[day]) {
                Object.keys(fixedSchedule[day]).forEach(slotIndex => {
                    const slot = fixedSchedule[day][slotIndex];
                    
                    if (slot && slot.workers && Array.isArray(slot.workers)) {
                        // Ensure all worker IDs are strings
                        slot.workers = slot.workers.map(id => String(id));
                        console.log(`Normalized worker IDs for day ${day}, slot ${slotIndex}:`, slot.workers);
                    }
                });
            }
        });
        
        return fixedSchedule;
    };

    // Helper function to clean up missing workers
    const cleanupMissingWorkers = (scheduleData, staffList) => {
        // Deep copy to avoid mutating original
        const cleanedSchedule = JSON.parse(JSON.stringify(scheduleData));
        const staffIds = staffList.map(worker => String(worker.id));
        let removedCount = 0;
        
        console.log("Cleaning up schedule - Available staff IDs:", staffIds);
        
        // Process each day and slot to remove invalid worker IDs
        Object.keys(cleanedSchedule).forEach(day => {
            if (cleanedSchedule[day]) {
                Object.keys(cleanedSchedule[day]).forEach(slotIndex => {
                    const slot = cleanedSchedule[day][slotIndex];
                    
                    if (slot && slot.workers && Array.isArray(slot.workers)) {
                        // Filter out worker IDs that don't exist in staffIds
                        const originalCount = slot.workers.length;
                        slot.workers = slot.workers.filter(workerId => {
                            const stringId = String(workerId);
                            const exists = staffIds.includes(stringId);
                            if (!exists) {
                                console.warn(`Removing non-existent worker ID ${workerId} from day ${day}, slot ${slotIndex}`);
                                removedCount++;
                            }
                            return exists;
                        });
                        
                        if (originalCount !== slot.workers.length) {
                            console.log(`Removed ${originalCount - slot.workers.length} invalid workers from day ${day}, slot ${slotIndex}`);
                        }
                    }
                });
            }
        });
        
        console.log(`Total workers removed from schedule: ${removedCount}`);
        return cleanedSchedule;
    };
    
    // Initialize the week
    useEffect(() => {
        generateWeekDays(new Date());
    }, []);
    
    // Initialize schedule structure based on time slots while preserving existing workers
    useEffect(() => {
        if (timeSlots.length > 0 && currentWeek.length > 0) {
            // Create a deep copy of the existing schedule to preserve workers
            const newSchedule = JSON.parse(JSON.stringify(schedule));
            
            // For each day
            currentWeek.forEach((day, dayIndex) => {
                const dayStr = dayIndex.toString();
                
                // Initialize day if it doesn't exist
                if (!newSchedule[dayStr]) {
                    newSchedule[dayStr] = {};
                }
                
                // For each time slot
                timeSlots.forEach((slot, slotIndex) => {
                    const slotStr = slotIndex.toString();
                    
                    // Preserve existing workers if the slot already exists
                    if (newSchedule[dayStr][slotStr]) {
                        // Update other slot properties but keep workers
                        const existingWorkers = newSchedule[dayStr][slotStr].workers || [];
                        
                        newSchedule[dayStr][slotStr] = {
                            workers: existingWorkers,
                            required: slot.requiredWorkers,
                            start: slot.startTime,
                            end: slot.endTime
                        };
                    } else {
                        // Create new slot if it doesn't exist
                        newSchedule[dayStr][slotStr] = {
                            workers: [],
                            required: slot.requiredWorkers,
                            start: slot.startTime,
                            end: slot.endTime
                        };
                    }
                });
                
                // Clean up slots that no longer exist in timeSlots
                Object.keys(newSchedule[dayStr]).forEach(slotIndex => {
                    if (parseInt(slotIndex) >= timeSlots.length) {
                        delete newSchedule[dayStr][slotIndex];
                    }
                });
            });
            
            // Update the schedule state
            setSchedule(newSchedule);
            
            // Log the updated schedule
            console.log("Schedule structure updated:", newSchedule);
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
                    
                    // Get all people first - we need this before processing the schedule
                    const peopleData = await getPeople(currentUser.uid);
                    console.log("People data loaded successfully:", peopleData.length, "people");
                    console.log("People details:", peopleData.map(p => ({id: p.id, name: p.name})));
                    
                    // Process the staff data to track schedule assignment
                    const processedStaff = peopleData.map(person => ({
                        ...person,
                        assigned: 0, // Initially assigned to 0 days
                        assignments: {} // Track specific assignments
                    }));
                    
                    // Try to load saved schedule if it exists
                    try {
                        console.log("Attempting to load saved schedule...");
                        const allAvailabilityData = await getAllAvailability(currentUser.uid);
                        
                        if (allAvailabilityData && allAvailabilityData.length > 0) {
                            // Find the custom schedule if it exists
                            const savedSchedule = allAvailabilityData.find(item => item.id === 'custom-schedule');
                            
                            if (savedSchedule && savedSchedule.timeSlots && savedSchedule.schedule) {
                                console.log("Found saved schedule:", JSON.stringify(savedSchedule));
                                
                                // First normalize the worker IDs to ensure consistency
                                const normalizedSchedule = ensureConsistentIds(savedSchedule.schedule);
                                
                                // Then clean up any worker IDs that don't exist in the staff
                                const cleanedSchedule = cleanupMissingWorkers(normalizedSchedule, processedStaff);
                                
                                // Check if workers are in the saved schedule
                                let workersFound = false;
                                let totalWorkers = 0;
                                
                                Object.entries(cleanedSchedule).forEach(([day, slots]) => {
                                    if (!slots) return;
                                    
                                    Object.entries(slots).forEach(([slotIndex, slotData]) => {
                                        if (slotData && slotData.workers && slotData.workers.length > 0) {
                                            workersFound = true;
                                            totalWorkers += slotData.workers.length;
                                            console.log(`Found ${slotData.workers.length} workers in day ${day}, slot ${slotIndex}:`, slotData.workers);
                                            
                                            // Check each worker ID exists in staff
                                            slotData.workers.forEach(workerId => {
                                                const worker = processedStaff.find(w => String(w.id) === String(workerId));
                                                if (!worker) {
                                                    console.error(`Worker ${workerId} in schedule not found in staff!`);
                                                } else {
                                                    console.log(`Verified worker ${workerId} (${worker.name}) exists in staff`);
                                                }
                                            });
                                        }
                                    });
                                });
                                
                                console.log(`Total workers in cleaned schedule: ${totalWorkers}`);
                                
                                if (!workersFound) {
                                    console.warn("WARNING: No workers found in the loaded schedule!");
                                }
                                
                                // First set the time slots
                                console.log("Setting timeSlots with:", savedSchedule.timeSlots.length, "slots");
                                setTimeSlots(savedSchedule.timeSlots);
                                
                                // Then set the schedule with workers
                                console.log("Setting schedule with cleaned data");
                                setSchedule(cleanedSchedule);
                                
                                // Now update the staff assignments
                                // IMPORTANT: We need to calculate assignments from the saved schedule
                                if (workersFound) {
                                    const assignmentMap = {};
                                    
                                    // Initialize map for all staff members
                                    processedStaff.forEach(worker => {
                                        console.log(`Initializing assignments for worker: ${worker.name} (${worker.id})`);
                                        assignmentMap[String(worker.id)] = {
                                            days: new Set(),
                                            slots: {}
                                        };
                                    });
                                    
                                    // Build assignment map from saved schedule
                                    Object.entries(cleanedSchedule).forEach(([day, slots]) => {
                                        if (!slots) return;
                                        
                                        Object.entries(slots).forEach(([slotIndex, slotData]) => {
                                            if (!slotData || !slotData.workers) return;
                                            
                                            slotData.workers.forEach(workerId => {
                                                const stringWorkerId = String(workerId);
                                                
                                                if (assignmentMap[stringWorkerId]) {
                                                    console.log(`Assigning worker ${workerId} to day ${day}, slot ${slotIndex}`);
                                                    assignmentMap[stringWorkerId].days.add(parseInt(day));
                                                    
                                                    if (!assignmentMap[stringWorkerId].slots[day]) {
                                                        assignmentMap[stringWorkerId].slots[day] = [];
                                                    }
                                                    
                                                    assignmentMap[stringWorkerId].slots[day].push(parseInt(slotIndex));
                                                } else {
                                                    console.error(`Worker ${workerId} not found in assignmentMap - this should not happen!`);
                                                }
                                            });
                                        });
                                    });
                                    
                                    // Apply assignments to staff
                                    const updatedStaff = processedStaff.map(worker => {
                                        const workerId = String(worker.id);
                                        const assignments = assignmentMap[workerId] || { days: new Set(), slots: {} };
                                        
                                        return {
                                            ...worker,
                                            assigned: assignments.days.size,
                                            assignments: assignments.slots
                                        };
                                    });
                                    
                                    console.log("Staff with assignments:", updatedStaff.map(w => ({
                                        id: w.id,
                                        name: w.name,
                                        assigned: w.assigned
                                    })));
                                    
                                    setStaff(updatedStaff);
                                } else {
                                    // If no workers found, just set the staff without assignments
                                    setStaff(processedStaff);
                                }
                                
                                // Set hasBeenSaved to true since we loaded a saved schedule
                                setHasBeenSaved(true);
                            } else {
                                console.log("Saved schedule missing required data, resetting to empty schedule");
                                setTimeSlots([]);
                                setStaff(processedStaff);
                            }
                        } else {
                            console.log("No saved schedule found, starting with empty schedule");
                            setTimeSlots([]);
                            setStaff(processedStaff);
                        }
                    } catch (loadError) {
                        console.error("Error loading saved schedule:", loadError);
                        setTimeSlots([]);
                        setStaff(processedStaff);
                    }
                    
                    setError(null);
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
        
        // Extract start and end times from timeSlot object
        // Handle both {start, end} and {startTime, endTime} formats
        const startTimeStr = timeSlot.start || timeSlot.startTime;
        const endTimeStr = timeSlot.end || timeSlot.endTime;
        
        if (!startTimeStr || !endTimeStr) {
            console.error("Missing start or end time in timeSlot", timeSlot);
            return false;
        }
        
        // Parse time slot times
        const slotStartHour = parseInt(startTimeStr.split(':')[0], 10);
        const slotEndHour = parseInt(endTimeStr.split(':')[0], 10);
        
        // Convert worker's availability hours to numbers if they're strings
        const availableHours = dayAvailability.hours.map(h => 
            typeof h === 'string' ? parseInt(h, 10) : h
        );
        
        // Check if all hours in the time slot are in the worker's availability
        for (let hour = slotStartHour; hour < slotEndHour; hour++) {
            if (!availableHours.includes(hour)) {
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
        e.preventDefault && e.preventDefault();
        
        // Remove drop target highlighting
        if (e.currentTarget) {
            e.currentTarget.classList.remove('valid-drop-target', 'invalid-drop-target');
        }
        
        // Get the worker ID from the drag data
        const workerId = (e.dataTransfer && e.dataTransfer.getData("workerId")) || touchDrag;
        
        if (!workerId) {
            console.log("No worker ID found in drop event");
            return;
        }
        
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
        
        // Reset touch drag state
        setTouchDrag(null);
    };
    
    // Update staff assignments based on the schedule
    const updateStaffAssignments = (newSchedule) => {
        // Create a map to track which days each worker is assigned to
        const assignmentMap = {};
        
        // Initialize map for all staff members
        staff.forEach(worker => {
            assignmentMap[String(worker.id)] = {
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
                    const stringWorkerId = String(workerId);
                    if (assignmentMap[stringWorkerId]) {
                        assignmentMap[stringWorkerId].days.add(parseInt(day));
                        
                        if (!assignmentMap[stringWorkerId].slots[day]) {
                            assignmentMap[stringWorkerId].slots[day] = [];
                        }
                        
                        assignmentMap[stringWorkerId].slots[day].push(parseInt(slotIndex));
                    }
                });
            });
        });
        
        // Update staff state with assignment info
        const updatedStaff = staff.map(worker => ({
            ...worker,
            assigned: assignmentMap[String(worker.id)] ? assignmentMap[String(worker.id)].days.size : 0,
            assignments: assignmentMap[String(worker.id)] ? assignmentMap[String(worker.id)].slots : {}
        }));
        
        setStaff(updatedStaff);
    };
    
    // Remove a worker from a time slot
    const removeWorkerFromSlot = (workerId, day, slotIndex) => {
        const newSchedule = JSON.parse(JSON.stringify(schedule));
        
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
            const newSchedule = JSON.parse(JSON.stringify(schedule));
            
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
    
    // Save the schedule to Firebase with proper deep copying of workers array
    const saveSchedule = async () => {
        if (!currentUser) {
            alert("You must be logged in to save the schedule");
            return;
        }
        
        setSaving(true);
        console.log("Starting save schedule process...");
        
        try {
            // Create proper deep copies of all data structures
            let deepCopySchedule = JSON.parse(JSON.stringify(schedule));
            const deepCopyTimeSlots = JSON.parse(JSON.stringify(timeSlots));
            
            // Ensure consistent ID types
            deepCopySchedule = ensureConsistentIds(deepCopySchedule);
            
            console.log("Preparing schedule with the following workers assigned:");
            // Debug log to check workers arrays
            Object.entries(deepCopySchedule).forEach(([day, slots]) => {
                Object.entries(slots).forEach(([slotIndex, slotData]) => {
                    if (slotData.workers && slotData.workers.length > 0) {
                        console.log(`Day ${day}, Slot ${slotIndex}: Workers assigned:`, slotData.workers);
                    }
                });
            });
            
            // Create the schedule data object
            const scheduleData = {
                id: 'custom-schedule',
                timeSlots: deepCopyTimeSlots,
                schedule: deepCopySchedule,
                updatedAt: new Date().toISOString(),
                createdAt: new Date().toISOString()
            };
            
            // Save to Firebase
            await saveAvailability(currentUser.uid, scheduleData);
            
            // Verify the save by immediately retrieving it
            const allAvailabilityData = await getAllAvailability(currentUser.uid);
            const savedSchedule = allAvailabilityData.find(item => item.id === 'custom-schedule');
            
            if (savedSchedule) {
                console.log("Verified saved schedule:", savedSchedule);
                
                // Check if workers arrays were saved properly
                let workersFound = false;
                if (savedSchedule.schedule) {
                    Object.entries(savedSchedule.schedule).forEach(([day, slots]) => {
                        Object.entries(slots).forEach(([slotIndex, slotData]) => {
                            if (slotData.workers && slotData.workers.length > 0) {
                                workersFound = true;
                                console.log(`Verified Day ${day}, Slot ${slotIndex}: Workers present:`, slotData.workers);
                            }
                        });
                    });
                }
                
                if (!workersFound) {
                    console.warn("WARNING: Schedule saved, but no workers found in the saved data!");
                } else {
                    console.log("Workers successfully saved in the schedule");
                }
                
                // Set hasBeenSaved to true to enable the View Schedule button
                setHasBeenSaved(true);
                
                alert("Schedule saved successfully!");
            } else {
                console.error("Failed to verify saved schedule");
                alert("Schedule may not have saved properly. Please check after reloading.");
            }
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
        
        console.log(`Getting worker info for day ${day}, slot ${slotIndex}, workers:`, slot.workers);
        
        // Convert all IDs to strings for consistent comparison
        return slot.workers.map(workerId => {
            // Ensure workerId is a string for comparison
            const stringWorkerId = String(workerId);
            
            // Find worker by matching ID as string
            const worker = staff.find(w => String(w.id) === stringWorkerId);
            
            if (!worker) {
                console.warn(`Worker with ID ${workerId} not found in staff list`);
                return null;
            }
            
            return { id: workerId, name: worker.name };
        }).filter(info => info !== null);
    };
    
    // Navigate to the Final schedule view
    const navigateToFinalView = () => {
        navigate('/final'); // Navigate to the Final component route
    };
    
    // IMPROVED MOBILE TOUCH SUPPORT IMPLEMENTATION
    // ============================================

    // Add global touch event listener for iPad compatibility
    useEffect(() => {
        // Add non-passive global listeners to handle touch events properly
        const handleGlobalTouchMove = (e) => {
            // If we're dragging, prevent default to stop iPad scrolling
            if (touchDrag) {
                e.preventDefault();
            }
        };

        // Add the event listener with {passive: false} for iPad compatibility
        document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
        
        return () => {
            // Clean up
            document.removeEventListener('touchmove', handleGlobalTouchMove);
            if (touchTimerRef.current) {
                clearTimeout(touchTimerRef.current);
            }
            removeFloatingElement();
        };
    }, [touchDrag]);

    // Store scroll position when touch starts to prevent accidental scrolling during drag
    const storeScrollPosition = () => {
        scrollPositionRef.current = {
            x: window.scrollX,
            y: window.scrollY
        };
    };

    // Check if scroll position changed significantly during touch interaction
    const hasScrolled = () => {
        const threshold = 10; // pixels
        return (
            Math.abs(window.scrollX - scrollPositionRef.current.x) > threshold ||
            Math.abs(window.scrollY - scrollPositionRef.current.y) > threshold
        );
    };

    // Handle touch start on staff block - Improved for iPad
    const handleTouchStart = (e, workerId) => {
        // Prevent default to allow custom drag behavior on iPads
        e.preventDefault();
        
        const worker = staff.find(w => w.id === workerId);
        
        if (!worker || worker.assigned >= worker.maxDays) return;
        
        // Store the starting touch position
        storeScrollPosition();
        
        // Start a timer to differentiate between tap and drag
        touchTimerRef.current = setTimeout(() => {
            // Only set as drag if we haven't scrolled
            if (!hasScrolled()) {
                // Set the worker being dragged
                setTouchDrag(workerId);
                
                // Add visual feedback
                if (e.currentTarget) {
                    e.currentTarget.classList.add('touch-dragging');
                    dragSourceRef.current = e.currentTarget;
                }

                // Create a floating clone for visual feedback
                createFloatingDragElement(e, worker.name);
            }
        }, 300); // 300ms hold time to start drag
    };

    // Create a floating element that follows the touch for visual feedback
    const createFloatingDragElement = (e, workerName) => {
        // Remove any existing floating elements
        const existingFloating = document.getElementById('floating-drag-element');
        if (existingFloating) {
            document.body.removeChild(existingFloating);
        }
        
        // Create new floating element
        const floatingEl = document.createElement('div');
        floatingEl.id = 'floating-drag-element';
        floatingEl.className = 'floating-worker-block';
        floatingEl.textContent = workerName;
        
        // Position at touch point
        const touch = e.touches[0];
        floatingEl.style.left = `${touch.clientX - 50}px`;
        floatingEl.style.top = `${touch.clientY - 25}px`;
        floatingEl.style.position = 'fixed'; // Ensure fixed positioning
        floatingEl.style.pointerEvents = 'none'; // Ensure it doesn't interfere with touch
        
        // Append to body
        document.body.appendChild(floatingEl);
    };

    // Update floating element position during touch move
    const updateFloatingElementPosition = (e) => {
        const floatingEl = document.getElementById('floating-drag-element');
        if (floatingEl && e.touches && e.touches[0]) {
            const touch = e.touches[0];
            floatingEl.style.left = `${touch.clientX - 50}px`;
            floatingEl.style.top = `${touch.clientY - 25}px`;
        }
    };

    // Remove floating element
    const removeFloatingElement = () => {
        const floatingEl = document.getElementById('floating-drag-element');
        if (floatingEl) {
            document.body.removeChild(floatingEl);
        }
    };

    // Handle touch move - Improved for iPad
    const handleTouchMove = (e) => {
        // Always prevent default for iPad compatibility when dragging
        if (touchDrag) {
            e.preventDefault();
        }
        
        // If we're not dragging yet, check if we've scrolled to cancel the timer
        if (!touchDrag && touchTimerRef.current) {
            if (hasScrolled()) {
                clearTimeout(touchTimerRef.current);
                touchTimerRef.current = null;
            }
            return;
        }
        
        // If we are dragging, update the floating element position
        if (touchDrag) {
            updateFloatingElementPosition(e);
            
            // Check if touch is over a valid drop target
            findAndHighlightDropTarget(e.touches[0]);
        }
    };

    // Fallback function for finding elements at a point (for iPads without elementsFromPoint)
    const findElementsAtPoint = (x, y) => {
        const elements = [];
        const allElements = document.querySelectorAll('.weekly-schedule-cell');
        
        allElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
            ) {
                elements.push(element);
            }
        });
        
        return elements;
    };

    // Find and highlight drop target based on touch position - iPad compatible version
    const findAndHighlightDropTarget = (touch) => {
        // Remove any existing highlights
        document.querySelectorAll('.valid-drop-target, .invalid-drop-target').forEach(el => {
            el.classList.remove('valid-drop-target', 'invalid-drop-target');
        });
        
        // Use document.elementsFromPoint, but fall back to a different method if not available
        let elementsUnderTouch;
        
        if (document.elementsFromPoint) {
            elementsUnderTouch = document.elementsFromPoint(touch.clientX, touch.clientY);
        } else {
            // Fallback for older iPads that might not support elementsFromPoint
            elementsUnderTouch = findElementsAtPoint(touch.clientX, touch.clientY);
        }
        
        // Find cell element
        const cellElement = elementsUnderTouch.find(el => 
            el.classList.contains('weekly-schedule-cell')
        );
        
        if (cellElement) {
            // Extract day and slot indices from data attributes
            const dayIndex = parseInt(cellElement.getAttribute('data-day'));
            const slotIndex = parseInt(cellElement.getAttribute('data-slot'));
            
            if (!isNaN(dayIndex) && !isNaN(slotIndex)) {
                // Perform checks to see if this is a valid drop target
                const worker = staff.find(w => w.id === touchDrag);
                const timeSlot = timeSlots[slotIndex];
                const day = dayIndex.toString();
                const slot = schedule[day]?.[slotIndex];
                
                if (worker && timeSlot && slot) {
                    const isAvailable = isWorkerAvailable(worker, dayIndex, {
                        start: timeSlot.startTime,
                        end: timeSlot.endTime
                    });
                    
                    const isSlotFull = slot.workers?.length >= slot.required;
                    const isAlreadyAssigned = slot.workers?.includes(touchDrag);
                    
                    if (isAvailable && !isSlotFull && !isAlreadyAssigned) {
                        cellElement.classList.add('valid-drop-target');
                    } else {
                        cellElement.classList.add('invalid-drop-target');
                    }
                }
            }
        }
    };

    // Handle touch end - enhanced for iPad
    const handleTouchEnd = (e) => {
        // Clear the touch timer if it exists
        if (touchTimerRef.current) {
            clearTimeout(touchTimerRef.current);
            touchTimerRef.current = null;
        }
        
        // Remove floating element
        removeFloatingElement();
        
        // If we were dragging, try to drop
        if (touchDrag) {
            // Find the drop target
            const touch = e.changedTouches[0];
            
            // Use document.elementsFromPoint or fallback
            let elementsUnderTouch;
            if (document.elementsFromPoint) {
                elementsUnderTouch = document.elementsFromPoint(touch.clientX, touch.clientY);
            } else {
                elementsUnderTouch = findElementsAtPoint(touch.clientX, touch.clientY);
            }
            
            const cellElement = elementsUnderTouch.find(el => 
                el.classList.contains('weekly-schedule-cell')
            );
            
            // Reset drag source styling
            if (dragSourceRef.current) {
                dragSourceRef.current.classList.remove('touch-dragging');
                dragSourceRef.current = null;
            }
            
            if (cellElement) {
                // Extract day and slot indices from data attributes
                const dayIndex = parseInt(cellElement.getAttribute('data-day'));
                const slotIndex = parseInt(cellElement.getAttribute('data-slot'));
                
                if (!isNaN(dayIndex) && !isNaN(slotIndex)) {
                    // Create a more complete synthetic event that will work better on iPad
                    const syntheticEvent = {
                        preventDefault: () => {},
                        dataTransfer: {
                            getData: () => touchDrag
                        },
                        currentTarget: cellElement
                    };
                    
                    // Execute drop logic with our synthetic event
                    handleDrop(syntheticEvent, dayIndex, slotIndex);
                }
            }
            
            // Reset drag state
            setTouchDrag(null);
        }
    };

    // Handle touch cancel
    const handleTouchCancel = (e) => {
        // Clear the touch timer if it exists
        if (touchTimerRef.current) {
            clearTimeout(touchTimerRef.current);
            touchTimerRef.current = null;
        }
        
        // Remove floating element
        removeFloatingElement();
        
        // Reset drag source styling
        if (dragSourceRef.current) {
            dragSourceRef.current.classList.remove('touch-dragging');
            dragSourceRef.current = null;
        }
        
        // Reset drag state
        setTouchDrag(null);
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
                        
                        <button 
                            className="view-schedule-button" 
                            onClick={navigateToFinalView}
                            disabled={!hasBeenSaved}
                        >
                            View Schedule
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
                                                            data-day={dayIndex}
                                                            data-slot={slotIndex}
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
                                        onTouchStart={(e) => handleTouchStart(e, worker.id)}
                                        onTouchMove={(e) => handleTouchMove(e)}
                                        onTouchEnd={(e) => handleTouchEnd(e)}
                                        onTouchCancel={(e) => handleTouchCancel(e)}
                                        data-worker-id={worker.id} // Add this attribute to help with touch identification
                                    >
                                        <div className="weekly-staff-name">{worker.name}</div>
                                        <div className="weekly-staff-status">
                                            <span className="weekly-assignment-count">{worker.assigned}/{worker.maxDays}</span> days assigned
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="weekly-staff-help">
                                <p>Drag a worker to a time slot to assign them. On mobile, tap and hold a worker, then drag to a time slot. Workers will only be assigned if they are available during that time.</p>
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

            {/* CSS for mobile touch drag-and-drop */}
            <style jsx>{`
                /* Touch dragging styles */
                .touch-dragging {
                    opacity: 0.5;
                }
                
                .floating-worker-block {
                    position: fixed;
                    z-index: 1000;
                    background-color: #4a90e2;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 4px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                    pointer-events: none;
                    width: 100px;
                    text-align: center;
                    font-weight: bold;
                }
                
                /* Make sure valid and invalid drop targets are visible on touch devices */
                .valid-drop-target {
                    background-color: rgba(76, 175, 80, 0.3) !important;
                    border: 2px dashed #4CAF50 !important;
                }
                
                .invalid-drop-target {
                    background-color: rgba(244, 67, 54, 0.3) !important;
                    border: 2px dashed #F44336 !important;
                }
                
                /* Disable default touch behaviors that interfere with drag and drop */
                .weekly-staff-block {
                    -webkit-user-select: none;
                    user-select: none;
                    -webkit-touch-callout: none;
                    touch-action: none; /* Prevent Safari from handling touches itself */
                }
            `}</style>

            {/* Add this non-JSX script to disable browser default behaviors that interfere with custom touch handling */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    // Disable unwanted default touch behaviors on iPad
                    document.addEventListener('touchstart', function(e) {
                        if (e.target.closest('.weekly-staff-block')) {
                            // We want to handle this touch specially for drag-and-drop
                            e.preventDefault();
                        }
                    }, {passive: false});

                    // Disable unwanted text selection during touch drag
                    document.addEventListener('touchmove', function(e) {
                        if (document.getElementById('floating-drag-element')) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }, {passive: false});
                `
            }} />
        </div>
    );
}

export default Custom;