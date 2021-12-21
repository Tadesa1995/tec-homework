// import React, { useState, useEffect, useRef } from "react";
// const SetIntervalSampleGood = () => {
//   const [counter, setCounter] = useState(0);
//   const counterRef = useRef();
//   // refernce point to the address of the count
//   counterRef.current = counter;
//   useEffect(() => {
//     const handle = setInterval(() => {
//       console.log("timer");
//       setCounter(counterRef.current + 1);
//     }, 1000);
//     return () => clearInterval(handle);
//   }, []);

//   return <p>counter : {counter}</p>;
// };
// export default SetIntervalSampleGood;
import React, { useState, useEffect, useRef } from "react";
const SetIntervalSampleGood = () => {
  const [count, setCount] = useState(0);
  const countref = useRef();
  countref.current = count;
  useEffect(() => {
    const handle = setInterval(() => {
      console.log("TIME");
      setCount(countref.current + 1);
    }, 1000);

    return () => clearInterval(handle);
  }, []);

return(
  <p>
    counter:{count}
  </p>
) 

};
 export default SetIntervalSampleGood

// //
