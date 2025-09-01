import { useEffect, useReducer } from "react"

export default function Seven() {
    const initialvalue={
        loading:true,
        error:"",
        data:[]
    }

    const reduce=(state,action)=>{
        if(action.type==="success"){
            return {loading:false,error:"",data:action.payload}
        }
        else if(action.type==="error"){
            return {loading:false,error:"something error",data:[]}
        }

    }

    const [state,dispatch]=useReducer(reduce,initialvalue);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            dispatch({type:"success",payload:data})
        })
        .catch(()=>{
            dispatch({type:"error"})
        })
    },[])

    
  return (
    <div>
        {state.loading} &&<p>....loading</p> 
       {state.error}&& <p>{state.error}</p>
       {state.data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}
