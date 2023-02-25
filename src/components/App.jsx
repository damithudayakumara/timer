import { useState } from "react";
import React from "react";

function App() {
  const new1 = new Date().toLocaleTimeString();

  const [time1, setTime] = useState(new1);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1>{time1}</h1>
      <button onClick={updateTime}>click</button>
    </div>
  );
}

export default App;
