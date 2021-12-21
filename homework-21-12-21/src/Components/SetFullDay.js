import React, { useState, useEffect } from "react";
const SetFullDay = () => {
  useEffect(() => {
    const time = setInterval(() => {
      const now = new Date();
      document.title = now;
    }, 1000,[])
    

    return (()=>clearInterval(time))
  }, []);

  return <div></div>;
};

export default SetFullDay;
