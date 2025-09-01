import { useRef, useState } from "react"

export default function Forth() {
    const timer=useRef(null);
    const [time,setTime]=useState(0);

    const starttimer=()=>{
        timer.current=setInterval(()=>{
            setTime((pre)=>pre+1);
        },1000);        
    }
    
    const stoptimer=()=>{
        clearInterval(timer.current);
        timer.current=null;
    }
  return (
    <div>
        <p>{time}</p>
        <button onClick={starttimer}>Start timer</button>
        <button onClick={stoptimer}>Stop timer</button>

      
    </div>
  )
}
