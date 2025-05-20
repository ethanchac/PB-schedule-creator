import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  getPeople, 
  getAllAvailability
} from '../services/databaseService';
import './Final.css';

function Final() {
    const { currentUser } = useAuth();
    const [staff, setStaff] = useState([]);
    const [schedule, setSchedule] = useState({});
    const [timeSlots, setTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentWeek, setCurrentWeek] = useState([]);
    
    // Generate array of dates for current week
    const generateWeekDays = (date) => {
        const days = [];
        // Start from Monday (1)
        const dayOfWeek = date.getDay();
        const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // If Sunday, go back 6 days, otherwise go to Monday
        
        const startDate = new Date(date);
        startDate.setDate(date.getDate() + mondayOffset);
        
        // Generate 7 days starting from Monday
        for (let i = 0; i < 7; i++) {
            const day = new Date(startDate);
            day.setDate(startDate.getDate() + i);
            days.push(day);
        }
        
        setCurrentWeek(days);
    };
    
    // Initialize the week
    useEffect(() => {
        generateWeekDays(new Date());
    }, []);
    
    // Format date to display format MM/DD/YYYY
    const formatDate = (date) => {
        if (!date) return '';
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };
    
    // Helper function to get day name
    const getDayName = (dayIndex) => {
        const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        return days[dayIndex];
    };
    
    // Convert 24h time string (HH:MM) to display format
    const formatTime = (timeString) => {
        if (!timeString) return '';
        
        const [hours, minutes] = timeString.split(':').map(Number);
        let period = 'am';
        let displayHours = hours;
        
        if (hours >= 12) {
            period = 'pm';
            displayHours = hours === 12 ? 12 : hours - 12;
        }
        if (hours === 0) {
            displayHours = 12;
        }
        
        return `${displayHours}${minutes > 0 ? ':' + minutes.toString().padStart(2, '0') : ''}${period}`;
    };
    
    // Helper function to get worker's shift for a specific day
    const getWorkerShiftForDay = (workerId, dayIndex) => {
        const day = dayIndex.toString();
        if (!schedule[day]) return null;
        
        // Find all slots where this worker is assigned for this day
        const assignedSlots = [];
        
        Object.entries(schedule[day]).forEach(([slotIndex, slotData]) => {
            if (slotData.workers && slotData.workers.includes(workerId)) {
                assignedSlots.push({
                    slotIndex: parseInt(slotIndex),
                    start: slotData.start,
                    end: slotData.end
                });
            }
        });
        
        if (assignedSlots.length === 0) return null;
        
        // Sort slots by start time
        assignedSlots.sort((a, b) => {
            const aStartHour = parseInt(a.start.split(':')[0]);
            const bStartHour = parseInt(b.start.split(':')[0]);
            return aStartHour - bStartHour;
        });
        
        // Format the shift time
        const firstSlot = assignedSlots[0];
        const lastSlot = assignedSlots[assignedSlots.length - 1];
        
        return `${formatTime(firstSlot.start)}-${formatTime(lastSlot.end)}`;
    };
    
    // Load data from Firebase when component mounts
    useEffect(() => {
        async function loadData() {
            if (currentUser) {
                try {
                    setLoading(true);
                    console.log("Loading staff and schedule data for final view");
                    
                    // Get all people
                    const peopleData = await getPeople(currentUser.uid);
                    
                    // Try to load saved schedule
                    const allAvailabilityData = await getAllAvailability(currentUser.uid);
                    
                    if (allAvailabilityData && allAvailabilityData.length > 0) {
                        // Find the custom schedule
                        const savedSchedule = allAvailabilityData.find(item => item.id === 'custom-schedule');
                        
                        if (savedSchedule && savedSchedule.timeSlots && savedSchedule.schedule) {
                            console.log("Found saved schedule for final view");
                            
                            // Set time slots
                            setTimeSlots(savedSchedule.timeSlots);
                            
                            // Set schedule data
                            setSchedule(savedSchedule.schedule);
                            
                            // Set staff
                            setStaff(peopleData);
                            
                            setError(null);
                        } else {
                            setError("No valid schedule found. Please create and save a schedule first.");
                        }
                    } else {
                        setError("No saved schedule found. Please create and save a schedule first.");
                    }
                } catch (err) {
                    console.error("Error loading data for final view:", err);
                    setError(`Error loading schedule data: ${err.message || 'Unknown error'}`);
                } finally {
                    setLoading(false);
                }
            } else {
                setError("You must be logged in to view the schedule");
                setLoading(false);
            }
        }
        
        loadData();
    }, [currentUser]);

    if (loading) {
        return <div className="final_view_loading">Loading schedule...</div>;
    }

    if (error) {
        return <div className="final_view_error">{error}</div>;
    }

    // Calculate the day order for display (Monday to Sunday)
    const dayOrder = [1, 2, 3, 4, 5, 6, 0]; // Monday to Sunday

    return (
        <div className="final_view_container">
            <h2 className="final_view_title">Weekly Staff Schedule</h2>
            
            <div className="final_view_table_wrapper">
                <div className="final_view_table_container">
                    <table className="final_view_schedule_table">
                        <thead>
                            <tr>
                                <th className="final_view_employee_header">
                                    NAME OF<br />EMPLOYEE
                                </th>
                                {dayOrder.map((dayIndex, index) => (
                                    <th key={`header-${dayIndex}`} className="final_view_day_header">
                                        {getDayName(dayIndex)}
                                        <br />
                                        {currentWeek[index] ? formatDate(currentWeek[index]) : ''}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map(worker => (
                                <tr key={`worker-row-${worker.id}`}>
                                    <td className="final_view_employee_name">{worker.name}</td>
                                    {dayOrder.map((dayIndex) => {
                                        const shift = getWorkerShiftForDay(worker.id, dayIndex);
                                        return (
                                            <td 
                                                key={`shift-${worker.id}-${dayIndex}`}
                                                className={`final_view_shift_cell ${shift ? 'final_view_has_shift' : ''}`}
                                            >
                                                {shift || ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="final_view_footer">
                <p className="final_view_update_text">Last updated: {new Date().toLocaleDateString()}</p>
                <button 
                    className="final_view_back_button"
                    onClick={() => window.history.back()}
                >
                    Back to Schedule Editor
                </button>
                <button 
                    className="final_view_print_button"
                    onClick={() => window.print()}
                >
                    Print Schedule
                </button>
            </div>
        </div>
    );
}

export default Final;