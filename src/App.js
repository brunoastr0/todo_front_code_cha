import CreateTask from "./components/CreateTask";
import ShowTasks from "./components/ShowTasks";
import { useState } from "react";
import "./App.css"

function App() {
  const [updateValue, setUpdateValue] = useState(0)
  return (
    <div className="App">
      <CreateTask setUpdateValue={setUpdateValue} updateValue={updateValue} />
      <ShowTasks updateValue={updateValue} setUpdateValue={setUpdateValue} />
    </div>
  );
}

export default App;
