import { useState } from "react"

export default function Eight() {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    const [objdata,setObjdata]=useState({name:"",age:""});

    function submitdata(){
        setObjdata({name:name,age:age})
    }

  return (
    <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>

        <br></br>
        <br></br>

        <label>Age</label>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>

        <br></br>
        <br></br>

        <button onClick={submitdata}>Submit</button>

        <p>Name:- {objdata.name}</p>
        <p>Age:- {objdata.age}</p>

      
    </div>
  )
}
