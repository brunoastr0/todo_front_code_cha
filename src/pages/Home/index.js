import ShowTasks from "../../components/ShowTasks";
import CreateTask from "../../components/CreateTask";
import { useState } from "react";

import "../../styles/App.css"

function Home() {
    const [updateValue, setUpdateValue] = useState(0)


    return (
        <div className="App">
            <CreateTask setUpdateValue={setUpdateValue} updateValue={updateValue} />

            <ShowTasks setUpdateValue={setUpdateValue} updateValue={updateValue}/>

        </div>
    );
}

export default Home;
