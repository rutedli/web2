// Input.js
import React from 'react';

function Input({ value, onChange }) {
  return (
    <div>
      <label htmlFor="percentageInput">Percentage:</label>
      <input
        id="percentageInput"
        type="number"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
