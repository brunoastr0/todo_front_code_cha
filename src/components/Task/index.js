import './index.css'
import { useState } from 'react'
import axios from "axios"


export default function Task(props) {
    const { id, description, completed } = props.data;


    const taskCompleted = async (e) => {


        try {
            await axios.patch(`http://localhost:3000/api/task/complete/${id}`)

        } catch (error) {
            console.error(error);

        }

    }




    const isCompletedClass = completed ? "text-strike" : ""

    return (
        <>
            <div className={`data_element ${isCompletedClass}`} key={id} >

                <div className="box">{description}</div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={taskCompleted}
                />
                <input
                    className="box"
                    value="DELETE"
                    type="submit"
                    onClick={() => props.deleteTask(id)} />
                <input className="box" value="EDIT" type="submit" />


            </div>
        </>

    )
}