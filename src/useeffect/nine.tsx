import { useEffect, useState } from "react"

export default function Nine() {
    const[bgcolor,setBgcolor]=useState("white");
    const [time,setTime]=useState(0);
    useEffect(()=>{
        if(time%3===0){
            setBgcolor("red");
        }
        else if(time%3===1){
            setBgcolor("green");
        }
        else{
            setBgcolor("blue");
        }
        const interval=setInterval(()=>{
            setTime((prevTime) => prevTime + 1); 
        },1000);
        return()=>clearInterval(interval);
    },[time]);


  return (
    <div>
      <h1 style={{ backgroundColor: bgcolor }}>{time}</h1>
    </div>
  )
}
