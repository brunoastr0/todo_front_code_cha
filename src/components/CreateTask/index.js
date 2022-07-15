import { useState } from "react";
import axios from "axios";
import "./style.css"


export default function CreateTask(props){
    const [data, setData] = useState("")

    const handleSubmit = async (e)=>{
        

        e.preventDefault();
        return await axios.post('http://localhost:3000/api/task', {
        description: data
        })
    }
    return(
        <>
        <div className="input-task">
           <form onSubmit={handleSubmit}>
               <input 
               placeholder="new task..."
               type="text" 
               value={data}
               onChange={event => setData(event.target.value)}
               />

               <input type="submit" value="submit" />

            </form> 

        </div>
        </>
        
    )
}