import { useReducer } from "react"

export default function First() {
    const reducer=(state,action)=>{
        console.log(state,action);
        if(action.type=="increment"){
            return state+1;
        }
        else if(action.type=="decrement"){
            return state-1;
        }
    }

    const [count,dispatch]=useReducer(reducer,0);
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>dispatch({type:"increment"})}>Increament</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>

      
    </div>
  )
}
