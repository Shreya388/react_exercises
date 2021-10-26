import React, {useState, useCallback } from 'react';
import Hello from "./Hello";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count, setCount]);

  return (
    <div className="App">
        <Hello increment={increment} />
        <div>count: {count}</div>
    </div>
  );
};

export default App;
