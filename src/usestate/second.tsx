import { useState } from "react"

export default function Second() {
    const[themes,setThemes]=useState(true);
    const [count,setCount]=useState(0);

    function add(c){
        setCount(c+1)
    }

  return (
    <div>
        <h1>{themes?"Light On":"Light Off"}</h1>
        <button onClick={
            ()=>{
            setThemes(!themes)
            add(count)
            }}> Theme Toggle</button>
        <h2>{count}</h2>

    </div>
  )
}
