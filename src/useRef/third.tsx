import { useRef } from "react"

export default function Third() {
    const scroll=useRef(null);

    const handleclick=()=>{
        scroll.current.scrollIntoView({behavior:"smooth"});
    }

  return (
    <div>
        <button onClick={handleclick}>Click</button>
        <div style={{ height: "200vh" }}></div>

        <div ref={scroll} style={{height:"100px",backgroundColor:"pink"}}>
            Scroll content
        </div>
      
    </div>
  )
}
