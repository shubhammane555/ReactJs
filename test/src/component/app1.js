import React, { useState } from "react";

function App1() {
  const [count, setCount] = useState(0);
  const [value, mulvalue] = useState(100);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const doubleValue = () => {
    mulvalue(value * 2);
  };

  return (
    <div className="App">
      <header className="App-header">
       
        <p>the increment Counter is:{count}</p>
        <button onClick={incrementCount}>increment Counter</button>
        <br></br>
        <p>multiplied value here:{value}</p>
        <button onClick={doubleValue}>Double value </button>
      </header>
    </div>
  );
}
export default App1;
