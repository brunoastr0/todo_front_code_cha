import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../Task";

import "../../styles/ShowTask.css"


export default function ShowTask(props) {

    const { setUpdateValue, updateValue } = props

    //Hooks
    const [tasks, settasks] = useState([])

    useEffect(() => {
        fetchAllTasks()
    }, [updateValue])

    //functions
    const fetchAllTasks = async () => {
        try {
            const { data, status } = await axios.get('http://localhost:3000/api/task')
            if (status === 201)
                settasks(data);
            else
                console.log("Error")

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
                        key={task.id}
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
            <div className="task">{taskData}</div>
        </>
    )
} 