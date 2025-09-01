import { useReducer } from "react"

export default function Fifth() {
  const initialvalue={
    input:"",
    task:[]
  }

  const reducer=(state,action)=>{
    if(action.type==="set"){
      return {...state,input:action.value}
    }
    else if(action.type==="addtask"){
      return {...state,task:[...state.task,state.input],input:""}
    }
    else if(action.type==="removetask"){
      return {...state,task:state.task.slice(0,-1)}
    }
  }

  const [state,dispatch]=useReducer(reducer,initialvalue);

  return (

    <div>
      <label>Add task:</label>
      <input type="text" onChange={(e)=>{dispatch({type:"set",value:e.target.value})}}></input>
      <button onClick={()=>dispatch({type:"addtask"})}>Add array</button>
      <button onClick={()=>dispatch({type:"removetask"})}>Remove array</button>

      


      <ul>
        {state.task.map((t,i)=>(
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
