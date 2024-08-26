import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(5);

  function addValue() {
    const newValue = value + 1;
    if (newValue <= 20) {
      setValue(newValue);
      console.log("Value is updated:", newValue);
    } else {
      console.log("Value cannot exceed 20.");
    }
  }

  function removeValue() {
    const newValue = value - 1;
    if (newValue >= 0) {
      setValue(newValue);
      console.log("Value is updated:", newValue);
    } else {
      console.log("Value cannot be negative.");
    }
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'blue' }}>01-project Counter</h1>
      <p>Counter Value: {value}</p>
      <button onClick={addValue} style={{ borderRadius: '7px', margin: '3px' }}>
        Increase Value:{value}
      </button>
      <button onClick={removeValue} style={{ borderRadius: '7px' }}>
        Decrease Value:{value}
      </button>
      <p>Value is updated successfully: {value}</p>
    </div>
  );
}

export default App;
