// App.js
import React, { useState } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    setIsRunning(true);
    startTimer();
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const startTimer = () => {
    setInterval(() => {
      if (isRunning) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);
  };

  return (
    <div className="app">
      <Timer isRunning={isRunning} />
      <Controls
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  )
}

export default App;
