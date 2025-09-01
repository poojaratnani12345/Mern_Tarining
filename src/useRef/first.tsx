import { useEffect, useRef, useState } from "react"

export default function First() {
  const countref=useRef(null);
  const [count,setCount]=useState(0);

  useEffect(()=>{
    countref.current=count;
  },[count])
  
  return (
    <div>
      <h1>{count}</h1>
      <p>{countref.current}</p>
      <button onClick={()=>setCount(count+1)}>Click +</button>
      
    </div>
  )
}
