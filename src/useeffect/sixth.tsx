import { useEffect, useState } from "react"

export default function Sixth() {
  const[time,setTime]=useState(0);

  useEffect(()=>{
    if(time>=10){
      return;
    }
    const interval=setInterval(()=>{
      setTime(time+1);
    },1000);
    if(time==10){
      
    }
    return()=>{
      clearInterval(interval);
    }
  },[time]);

  return (
    <div>
      <h1>{time}</h1>
      
    </div>
  )
}
