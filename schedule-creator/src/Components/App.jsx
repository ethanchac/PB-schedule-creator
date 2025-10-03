// src/Components/App.jsx
import "./App.css";
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getAllAvailability } from '../services/databaseService';
import Schedule from "./Schedule";
import Creator from "./Creator";

function App() {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const { currentUser } = useAuth();

  // Load schedule data from Firebase
  useEffect(() => {
    async function loadSchedule() {
      if (currentUser) {
        try {
          const allAvailabilityData = await getAllAvailability(currentUser.uid);
          const savedSchedule = allAvailabilityData.find(item => item.id === 'custom-schedule');

          if (savedSchedule) {
            setScheduleData(savedSchedule);
          }
        } catch (error) {
          console.error("Error loading schedule:", error);
        }
      }
    }

    loadSchedule();
  }, [currentUser]);

  return (
    <div className="main-container">
      <div className="left-panel">
        <Schedule
          selectedWorker={selectedWorker}
          scheduleData={scheduleData}
        />
      </div>
      <div className="right-panel">
        <Creator
          selectedWorker={selectedWorker}
          onSelectWorker={setSelectedWorker}
        />
      </div>
    </div>
  );
}

export default App;