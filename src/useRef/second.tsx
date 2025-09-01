import { useRef } from "react"

export default function Second() {
    const c=useRef("");

    const handleclick=()=>{
        c.current.focus();
    }

  return (
    <div>
        <input ref={c}></input>
        <button onClick={handleclick}>Click</button>
      
    </div>
  )
}
