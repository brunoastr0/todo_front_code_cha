import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../Task";
import './style.css'


export default function ShowTask(props) {



    //Hooks
    const [tasks, settasks] = useState([])


    useEffect(() => {
        fetchAllTasks()
    }, [props.updateValue])

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
            props.setUpdateValue(props.updateValue + 1)

        }
        catch (err) {
            console.error(err);
        }

    }


    console.log(tasks)
    // tasks.map((task) => {
    //     console.log(task)
    // })



    const taskData = tasks.map((task) => {

        return (
            <>
                <div>
                    <Task
                        key = {task.id}
                        data={task}
                        deleteTask={deleteTask}
                        updateValue={props.updateValue}
                        setUpdateValue={props.setUpdateValue}
                    />
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