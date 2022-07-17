import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../Task";
import CreateTask from "../CreateTask";

import './style.css'


export default function ShowTask(props) {



    //Hooks
    const [tasks, settasks] = useState([])
    const [updateValue, setUpdateValue] = useState(0)

    useEffect(() => {
        fetchAllTasks()
    }, [updateValue])

    //functions
    const fetchAllTasks = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/task')
            settasks(data);

        }
        catch (err) {
            console.error(err);
        }
    }

    const deleteTask = async (id) => {
        try {

            await axios.delete(`http://localhost:3000/api/task/${id}`)

            settasks(tasks.filter(task => task.id !== id));
            setUpdateValue(updateValue + 1)

        }
        catch (err) {
            console.error(err);
        }

    }






    const taskData = tasks.map((task) => {

        return (
            <>
                <div>
                    <Task
                        key = {task.id}
                        data={task}
                        deleteTask={deleteTask}
                        updateValue={updateValue}
                        setUpdateValue={setUpdateValue}
                    />
                </div>

            </>

        )
    })

    return (

        <>

            <div className="task">
                <CreateTask setUpdateValue={setUpdateValue} updateValue={updateValue} />
                {taskData}

            </div>
        </>
    )
} 