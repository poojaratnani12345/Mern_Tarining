import { useState } from "react"

export default function Seventh() {
    const [like,setLike]=useState(0);

  return (
    <div>
        <button onClick={()=>setLike(like+1)}>✅</button>
        <h1>{like}</h1>
    </div>
  )
}
