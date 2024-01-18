// App.js
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Input from './components/Input';
import './App.css';

function App() {
  const [percentage, setPercentage] = useState(0);

  return (
    <div className="app">
      <ProgressBar percentage={percentage} />
      <Input value={percentage} onChange={setPercentage} />
    </div>
  );
}

export default App;