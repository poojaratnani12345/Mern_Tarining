let btn=document.querySelector("#clickMe");

let newfunc=()=>{
    console.log("Button clicked!");
}
btn.addEventListener("click",newfunc);

btn.addEventListener("click",newfunc);
// btn.onclick=(e)=>{
//     console.log("Button was clicked again!");
// };
btn.removeEventListener("click",newfunc);