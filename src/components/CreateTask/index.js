import { useState } from "react";
import axios from "axios";
import { FaPlus } from 'react-icons/fa'
import "./style.css"


export default function CreateTask(props) {
    const [data, setData] = useState("")
    const [inputField, setInputField] = useState(false)


    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            await axios.post('http://localhost:3000/api/task', {
                description: data
            })

            props.setUpdateValue(props.updateValue + 1)
            setInputField(false)
            //window.location = "/"

            setData("")

        } catch (error) {
            console.error(error)
        }


    }

    const hanldeNewTask = (e) => {
        const input = e.target.value
        if (input.trim().length > 0) {
            setData(input)
        } else
            console.log("empty input")

    }
    return (
        <>
            <div className="input-task">

                <button id="btn-newTask"
                    onClick={() => setInputField(true)}
                    className={`${inputField ? 'hide-btn' : ''}`}
                >
                    <FaPlus /> Add new task
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


                        <input
                            type="submit"
                            value="submit"
                            onClick={handleSubmit} />
                    </form>



                </div>


            </div>
        </>

    )
}