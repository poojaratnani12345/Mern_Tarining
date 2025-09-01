import { useEffect, useState } from "react"

export default function Third() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Component rendered");
    },[count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
      
    </div>
  )
}
