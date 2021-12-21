// import React, { useState } from 'react';
// function Counter() {
//  const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
// //     </div>
// //   );
// // }
// // export default Counter;

// import React, { useState,useEffect } from "react";
// const Clicks = ({intialization}) => {
    import { useState, useEffect } from "react";
  
    const SetIntervalSampleBad = () => {
    const [counter, setCounter] = useState(0);
     useEffect(() => {
       const handle = setInterval(() => {
         console.log("timer");
         setCounter(counter + 1);
       }, 1000);
    
       return () => clearInterval(handle);
     }, []);
    
     return (
         <p>counter : {counter}</p>
     );
    };
    export default SetIntervalSampleBad;
    


