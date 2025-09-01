import { useEffect, useState } from "react"

export default function Seven() {
    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data));
    },[]);

  return (
    <div>
        <p>{JSON.stringify(user)}</p>
      <ul>
        {user.map(user=>
            <li key={user.id}>{user.name}</li>
        )}
      </ul>
    </div>
  )
}
