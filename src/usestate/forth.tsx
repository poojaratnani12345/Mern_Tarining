import { useState } from "react"

export default function Forth() {
    const [username,setUsername]=useState("");
  return (
    <div>
        <label>Name</label>
        <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}></input>
        <p>name:- {username}</p>
    </div>
  )
}
