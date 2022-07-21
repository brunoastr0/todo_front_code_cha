import '../../styles/Task.css'
import axios from "axios"
import { useState } from 'react';
import { FaPencilAlt, FaRegWindowClose } from 'react-icons/fa'



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



    const isCompletedClass = completed ? "text-strike task-complete" : ""

    return (
        <>
            <div className={`data_element ${isCompletedClass}`} key={id} >

                <input
                    id="check-box"
                    className="box"
                    type="checkbox"
                    checked={completed}
                    onChange={taskCompleted}
                />

                <input
                    id="description"
                    type="text"
                    className={`box ${readOnlyState ? 'hideInput' : 'showInput'}`}
                    value={`${descriptionState}`}
                    readOnly={readOnlyState}
                    onChange={(e) => { setDescriptionState(e.target.value) }}
                />
                <button
                    id="editInput"
                    className={`box ${!completed ? '' : 'hideButton'} btn`}
                    onClick={HandleEditTask}
                >
                    <FaPencilAlt size={20} />
                </button>

                <button
                    className={`box ${readOnlyState ? 'hideButton' : ''} btn`}
                    onClick={cancelEdit}
                >
                    <FaRegWindowClose color="red" size={20} />

                </button>


                <button
                    className={`box ${readOnlyState ? '' : 'hideButton'} btn`}
                    onClick={() => props.deleteTask(id)} >

                    <FaRegWindowClose color="gray" size={20} />
                </button>



            </div>
        </>

    )
}