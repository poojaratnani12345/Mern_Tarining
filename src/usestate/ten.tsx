import { useState } from "react"

export default function Ten() {
    const [status,setStatus]=useState(true);

  return (
    <div>
        <h1>{status?"Start":"End"}</h1>
        <button onClick={()=>setStatus(!status)}>{status?"End Button":"Start Button"}</button>
    </div>
  )
}
