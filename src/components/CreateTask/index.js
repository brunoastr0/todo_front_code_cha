import { useState } from "react";
import axios from "axios";
import "./style.css"


export default function CreateTask(props) {
    const [data, setData] = useState("")
    

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/task', {
                description: data
            })

            props.setUpdateValue(props.updateValue+1)
            //window.location = "/"

        setData("")

        } catch (error) {
            console.error(error)
        }


    }
    return (
        <>
            <div className="input-task">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="new task..."
                        type="text"
                        value={data}
                        onChange={event => {
                            setData(event.target.value)
                        }}
                        
                    />

                    <input type="submit" value="submit" />

                </form>

            </div>
        </>

    )
}