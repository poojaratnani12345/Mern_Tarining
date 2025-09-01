import { useEffect } from "react"

export default function First() {
    useEffect(()=>{
        console.log("Component rendered");
    },[]);
  return (
    <div>
      
    </div>
  )
}
