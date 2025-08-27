import { useState } from "react"

export default function Sixth() {
    const [isVisible,setIsVisible]=useState(true);

  return (
    <div>
        <h1>{isVisible?"Hello Good morning":""}</h1>
        <button onClick={()=>setIsVisible(!isVisible)}>Toggle Message</button>
    </div>
  )
}
