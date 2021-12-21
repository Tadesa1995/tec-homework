import React, { useState, useEffect } from "react";
const Counter = (props) => {
    const [count,setCount]=useState(props.count)
 useEffect(() => {
    setCount(props.count);
 },[props.count])
  return (
    <div>
     <p>value of count is :{count}</p>
     <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  );
};
export default Counter;
