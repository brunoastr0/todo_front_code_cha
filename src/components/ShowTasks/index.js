import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../Task";
import './style.css'


export default function ShowTask(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchAllTasks()
    })

    const fetchAllTasks = async () => {
        try {

            const { data } = await axios.get('http://localhost:3000/api/task')
            setData(data);
        }
        catch (err) {
            console.error(err);
        }
    }

    const deleteTask = async (id) => {
        try {

            const { data } = await axios.delete(`http://localhost:3000/api/task/${id}`)
            setData(data);
        }
        catch (err) {
            console.error(err);
        }}
    const taskData = data.map((data) => {
        return (
            <>
                <div>
                    <Task data={data} deleteTask={deleteTask}/>
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