import { useState } from "react"

export default function First() {
    const [count,setCount]=useState(0);

    function add(c){
        setCount(c+1);
    }
    function remove(c){
        setCount(c-1);
    }

  return (
    <div>
        <button onClick={()=>add(count)}>+</button>
        <button onClick={()=>remove(count)}>-</button>

        <p>Count is:{count}</p>
    </div>
  )
}
