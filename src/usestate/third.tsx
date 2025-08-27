import { useState } from "react"

export default function Third() {
    const [showpassword,setShowpassword]=useState(true);
    const [enterpassword, setEnterpassword]=useState("");


   

  return (
    <div>
        <label>Password</label>
        <input type={enterpassword?"text":"password"} onChange={(event)=>setShowpassword(event.target.value)} ></input>
        <button onClick={()=>setEnterpassword(!enterpassword)}>Show password</button>
        <p>{showpassword}</p>
    </div>
  )
}
