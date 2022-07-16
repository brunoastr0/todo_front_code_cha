import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../Task";
import './style.css'


export default function ShowTask(props) {

    //Hooks
    const [tasks, settasks] = useState([])

    useEffect(() => {
        fetchAllTasks()
    }, [tasks])

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

            const { data } = await axios.delete(`http://localhost:3000/api/task/${id}`)
            settasks(data.filter(task => task.id !== id));
        }
        catch (err) {
            console.error(err);
        }
        window.location("/")
    }

    //

    const taskData = tasks.map((task) => {
        return (
            <>
                <div>
                    <Task data={task} deleteTask={deleteTask} />
                </div>

            </>

        )
    })
    return (
        <>
            <div className="task">
                {taskData}
            </div>
        </>
    )
} 