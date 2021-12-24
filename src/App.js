
import './App.css';
import Garage from './Garage';
import Football from './Football';
import { Goal } from './Ifevent';



function App() {
  return (
    <div>
      <Garage/>
      <Football/>
      <Goal isGoal={true}/>
    </div>
  );
}

export default App;
