import { act, useReducer } from "react"

export default function Six() {
    const intialvalue={
        nameinput:"",
        emailinput:"",
        ageinput:"",
        namearray:[],
        emailarray:[],
        agearray:[]
    }

    const reduce=(state,action)=>{
        if(action.type==="nameset"){
            return {...state,nameinput:action.value}
        }
        else if(action.type==="emailset"){
            return {...state,emailinput:action.value}
        }
        else if(action.type==="ageset"){
            return {...state,ageinput:action.value}
        } 
        else if(action.type==="submit"){
            return {
                ...state,
                namearray:[...state.namearray,state.nameinput],
                emailarray:[...state.emailarray,state.emailinput],
                agearray:[...state.agearray,state.ageinput],
                nameinput:"",
                emailinput:"",
                ageinput:""

            }
        }
        
    }

    const [name,dispatch]=useReducer(reduce,intialvalue);

  return (
    <div>
        <label>Name:</label>
        <input type="text" value={name.nameinput} onChange={(e)=>dispatch({type:"nameset",value:e.target.value})}></input>
        <br></br>
        <br></br>

        <label>Email:</label>
        <input type="text" value={name.emailinput} onChange={(e)=>dispatch({type:"emailset",value:e.target.value})}></input>
        <br></br>
        <br></br>


        <label>Age:</label>
        <input type="text"  value={name.ageinput} onChange={(e)=>dispatch({type:"ageset",value:e.target.value})}></input>
        <br></br>
        <br></br>

        <button onClick={()=>dispatch({type:"submit"})}>Submit</button>

        <ul>
            {name.namearray.map((n,i)=>(
                <li key={i}>Name:{n} , Email:-{name.emailarray[i]} , Age:-{name.agearray[i]}</li>
            ))}
        </ul>
    </div>
  )
}
