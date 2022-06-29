import React, { useState } from 'react';
import './style.css';
import "./App.jsx";


export default function App() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
    handleTimer();
  };

  const handleTimer = () => {
    setTime(new Date().toLocaleString());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <p>{time}</p>
      <button onClick={handleCounter}>Suma 1</button>
    </div>
  );
}
