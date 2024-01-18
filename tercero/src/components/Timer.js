// Timer.js
import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer({ isRunning, onReset }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    // Esta parte se ejecuta cuando se pulsa el botón de reinicio
    if (!isRunning) {
      setTime(0);
    }
  }, [isRunning, onReset]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Timer;
