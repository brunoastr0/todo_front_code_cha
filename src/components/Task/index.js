import './index.css'
import axios from "axios"
import { useState } from 'react';


export default function Task(props) {
    const { id, description, completed } = props.data;
    const [readOnlyState, setReadOnlyState] = useState(true)
    const [descriptionState, setDescriptionState] = useState(description)

   console.log(description)

    const editTask = async (e) => {
        try {
           
             await axios.put(`http://localhost:3000/api/task/${id}`,
                {
                    description: descriptionState
                })

        } catch (error) {
            console.error(error)
        }
    }


    const HandleEditTask = async () => {

        if (!readOnlyState) {
            editTask()
            setReadOnlyState(true)
            
        }else
        setReadOnlyState(false)

    }

    const cancelEdit = () => {
        setDescriptionState(description)
        setReadOnlyState(true)

    }

    const taskCompleted = async (e) => {
        
        try {
            await axios.patch(`http://localhost:3000/api/task/complete/${id}`)
            props.setUpdateValue(props.updateValue + 1)


        } catch (error) {
            console.error(error);

        }

    }



    const isCompletedClass = completed ? "text-strike" : ""

    return (
        <>
            <div className={`data_element ${isCompletedClass}`} key={id} >

                <input
                    className = "box"
                    type="checkbox"
                    checked={completed}
                    onChange={taskCompleted}
                />

                <input
                    type="text"
                    className={`box ${readOnlyState ? 'hideInput' : 'showInput'}`}
                    value={descriptionState}
                    readOnly={readOnlyState}
                    onChange={(e) => { setDescriptionState(e.target.value) }}
                />

                <input
                    className={`box ${readOnlyState ? '' : 'hideButton'}`}
                    value="DELETE"
                    type="submit"
                    onClick={() => props.deleteTask(id)} />
                <input
                    id="editInput"
                    className={`box ${!completed ? '' : 'hideButton'}`}
                    value="EDIT"
                    type="submit"
                    onClick={HandleEditTask}
                />

                <input
                    className={`box ${readOnlyState ? 'hideButton' : ''}`}
                    value="cancel"
                    type="submit"
                    onClick={cancelEdit}
                />


            </div>
        </>

    )
}