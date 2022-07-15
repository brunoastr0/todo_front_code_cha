import './index.css'


export default function Task(props){
    const {id, description, completed} = props.data;
   
     
    
    return(
        <>
        <div className="data_element" key={id}>

           <div className="box">{description}</div>
           <input type="checkbox" defaultChecked={completed} />
           <input className="box" value="DELETE" type="submit" onClick={()=>props.deleteTask(id)}/>
           <input className="box" value="EDIT" type="submit"/>


        </div>
        </>
        
    )
}