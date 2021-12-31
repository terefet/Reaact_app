import React, {useState} from 'react';
import './App.css';
import Garage from './Garage';
import Football from './Football';
import { Goal } from './Ifevent';
import Checkbox from './Checkbox';



function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status,setStatus] = useState("Open");
  return (
<>
<div>
    <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>
          New Year!
        </button>
        <button onClick={() => setYear(year - 1)}>
          New Year2!
        </button>
</div>
    <div>
        <h1>Manager on Duty: {manager}</h1>
        <button
          onClick={() => setManager("Rachel")}
        >
          New Manager
        </button>
      </div>
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>
        Open
      </button>
      <button
        onClick={() => setStatus("Back in 5")}
      >
        Break
      </button>
      <button onClick={() => setStatus("Closed")}>
        Closed
      </button> <button
        onClick={() => setStatus("Back in 5")}
      >
        Break
      </button>
      <button onClick={() => setStatus("Closed")}>
        Closed
      </button>
      <Garage/>
      <Football/>
      <Goal isGoal={true}/>
      <Checkbox/>
    </div>
    </>
  );
}

export default App;
