import { useEffect, useState } from "react"

export default function Forth() {
    const[resize,useResize]=useState(window.innerWidth);
    useEffect(()=>{
        console.log("resize window is:",resize);
        window.addEventListener("resize",()=>{
            useResize(window.innerWidth);
        })
        return()=>{
           window.removeEventListener("resize",()=>{
            useResize(window.innerWidth);
        })
        };
    },[resize]);
  return (
    <div>
        <h1>{resize}</h1>
    </div>
  )
}
