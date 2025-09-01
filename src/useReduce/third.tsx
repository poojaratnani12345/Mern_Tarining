import { useReducer } from "react"

export default function Third() {
    const initial=0;
    function reducer(state,action){
        if(action.type==="inc"){
            return state+1;
        }
        else if(action.type==="dec"){
            return state-1;
        }
        else if(action.type==="double"){
            return state*2;
        }
        else if(action.type==="half"){
            return state/2;
        }
        else if(action.type==="reset"){
            return initial;
        }
    };

    const[c,dispatch]=useReducer(reducer,initial); 
  return (
    <div>
        <h1>{c}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>+</button>
        <button onClick={()=>dispatch({type:"dec"})}>-</button>
        <button onClick={()=>dispatch({type:"double"})}>*</button>
        <button onClick={()=>dispatch({type:"half"})}>/</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      
    </div>
  )
}
