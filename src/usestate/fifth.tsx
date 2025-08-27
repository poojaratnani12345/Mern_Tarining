import { useState } from "react"

export default function Fifth() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [submiteddata,setSubmiteddata]=useState({name:"",email:"",password:""});

    function handlesubmit(){
        setSubmiteddata({name:name,email:email,password:password})
    }


  return (
    <div>
         <label>Name</label>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>

        <br></br>
        <br></br>

        <label>Email</label>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}></input>

        <br></br>
        <br></br>

        <label>Password</label>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}></input>


        <button onClick={handlesubmit}>Submit</button>
        <p>NAme:- {submiteddata.name}</p>
        <p>Email:- {submiteddata.email}</p>
        <p>Password:- {submiteddata.password}</p>

      
    </div>
  )
}
