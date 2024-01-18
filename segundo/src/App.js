import React, { useState } from 'react';
import Button from './components/Button';
import Box from './components/Box';
import './App.css';

const App = () => {
  const [boxVisible, setBoxVisible] = useState(true);

  const handleButtonClick = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div className="app">
      <Button onClick={handleButtonClick} />
      <Box visible={boxVisible} />
    </div>
  );
};

export default App;