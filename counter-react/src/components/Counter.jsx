import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const handleAddCount = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>React Counter :{counter}</h1>
      <button onClick={handleAddCount}>Add Count</button>
      <button onClick={handleRemove}>Remove Count</button>
    </div>
  );
};

export default Counter;
