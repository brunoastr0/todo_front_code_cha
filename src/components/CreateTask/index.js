import { useState } from "react";
import axios from "axios";
import { FaPlus } from 'react-icons/fa'
import "../../styles/CreateTask.css"
import ErrorMessage from "../ErrorMessage";


export default function CreateTask(props) {
    const [data, setData] = useState("")
    const [inputField, setInputField] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            await axios.post('http://localhost:3000/api/task', {
                description: data
            });




            props.setUpdateValue(props.updateValue + 1)
            setInputField(false)
            //window.location = "/"
            setError(false)
            setData("")

        } catch (error) {
            console.error(error.request)
            const { request } = error

            if (request.status === 400) {
                setError(true)
                setErrorMessage(request.responseText)
            }

        }


    }

    const hanldeNewTask = (e) => {
        const input = e.target.value
        if (input.trim().length > 0) {
            setData(input)
            return;
        }
        console.log("empty input")

    }

    return (
        <>
            {
                error &&
                <ErrorMessage message={errorMessage} />

            }

            <div className="input-task">

                <button 
                    onClick={() => setInputField(true)}
                    className={`${inputField ? 'hide-btn' : ''} btn-newTask`}
                >
                    <FaPlus size={18} color={'rgba(41,147,189,1)'} /> Add task
                </button>

                <div className={`${inputField ? '' : 'hide-btn'}`}>
                    <form >
                        <input

                            id="inputField"
                            placeholder="new task..."
                            type="text"
                            value={data}
                            onChange={hanldeNewTask}
                            required

                        />


                       
                        <button onClick={handleSubmit} className="btn-newTask">
                        <FaPlus size={18} color={'rgba(41,147,189,1)'} />
                        </button>
                    </form>



                </div>


            </div>
        </>

    )
}