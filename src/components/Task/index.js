import './index.css'
import axios from "axios"
import { useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa'



export default function Task(props) {
    const { id, description, completed } = props.data;
    const [readOnlyState, setReadOnlyState] = useState(true)
    const [descriptionState, setDescriptionState] = useState(description)


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

        } else
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
                    className="box"
                    type="checkbox"
                    checked={completed}
                    onChange={taskCompleted}
                />

                <input
                    id="description"
                    type="text"
                    className={`box ${readOnlyState ? 'hideInput' : 'showInput'}`}
                    value={ `${descriptionState}`}
                    readOnly={readOnlyState}
                    onChange={(e) => { setDescriptionState(e.target.value) }}
                />

                <button
                    className={`box ${readOnlyState ? '' : 'hideButton'}`}
                    onClick={() => props.deleteTask(id)} >

                    <FaTrash color="red" />
                </button>
                <button
                    id="editInput"
                    className={`box ${!completed ? '' : 'hideButton'}`}
                    onClick={HandleEditTask}
                >
                    <FaPencilAlt />
                </button>

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