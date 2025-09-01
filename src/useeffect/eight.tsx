import { useEffect, useState } from "react"

export default function Eight() {
    const[press,setPress]=useState(false);
    const[count,setCount]=useState(0);

    useEffect(()=>{
        document.onkeypress=()=>{
            console.log("Button Pressed");
            setPress(true);
            setCount(count+1);
        }
    });
    
  return (
    <div>
      <h1>{press ? "Button Pressed" : "Press a Button"}-{count}</h1>
    </div>
  )
}
