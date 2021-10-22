import React, {useState} from 'react';
import Hello from "./Hello";
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
        <Hello increment={() => setCount(count + 1)} />
        <div>count: {count}</div>
    </div>
  );
}

export default App;
