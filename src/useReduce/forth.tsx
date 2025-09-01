import { act, useReducer } from "react"

export default function Forth() {
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
        else if(action.value){
            console.log(action.value);
            return Number(action.value);
        }
    };

    const[c,dispatch]=useReducer(reducer,initial); 
  return (
    <div>
        <label>Add Counter Value:</label>
        <input type="number" onChange={(e)=>dispatch({value:e.target.value})}></input>


        <h1>{c}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>+</button>
        <button onClick={()=>dispatch({type:"dec"})}>-</button>
        <button onClick={()=>dispatch({type:"double"})}>*</button>
        <button onClick={()=>dispatch({type:"half"})}>/</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      
    </div>
  )
}
