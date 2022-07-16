import { useState } from "react";
import axios from "axios";
import "./style.css"


export default function EditTask(props) {
    const [description, setDescription] = useState("")

    const handleEditBUtton = async (e) => {


        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/task/${id}`, {
                description: description
            })

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
                        type="text"
                        value={description}
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