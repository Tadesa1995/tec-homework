
import React ,{ useState} from "react";
const HelloHooks = () =>{
  const [flag,setFlag]=useState(true)
//   const ar=useState(true)
//   const flag=ar[0]
//   const setFlag=ar[1]
    const style = {color : flag ? 'red' : 'blue'}
    return( <div>
      <button onClick={() => setFlag (!flag)}>Click</button>
      <p style={style}>Hello Hooks</p>
      </div>
  )}
export default HelloHooks  



// import React,{useState} from 'react'
// const HelloHOOKS=()=>{
//     const [flag,setFlag]=useState(true)
//     const style={color:flag?'red':'blue'}
//     return ( <div>
//         <button onClick={()=>setFlag(!flag)}>click me</button>
//         <p style={style}>hello Hooks</p>
//     </div>


//     )

// }