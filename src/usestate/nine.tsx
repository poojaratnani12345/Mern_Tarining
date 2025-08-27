import { useState } from "react"

export default function Nine() {
    const [todo,setTodo]=useState([]);
    const [inputvalue,setInputvalue]=useState("");

    function addtask(){
        if(inputvalue ==="") return;
        setTodo([...todo,inputvalue]);
        setInputvalue("");
    }   
    function deletetask(){
        todo.pop();
    }



  return (
    <div>
        <h1>ToDo List</h1>
        <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}></input>
        <button onClick={addtask}>Add Task</button>
        <button onClick={deletetask}>Delete Task</button>

        <ul>
            {todo.map((todo,index)=>(
                <li key={index}>
                    {todo}

                </li>
            ))}
        </ul>
    </div>
  )
}
