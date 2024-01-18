// Controls.js
import React from 'react';
import './Controls.css';

function Controls({ isRunning, onStart, onStop, onReset }) {
  return (
    <div className="controls">
      <button onClick={onStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={onStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
