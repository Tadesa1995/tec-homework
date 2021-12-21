// quick intro
// BrowesrRouter=the history of all the pages

import { useState, useEffect } from "react";
import Counter from "./Components/Counter";
import SetFullDay from './Components/SetFullDay'
import "./App.css";

const App = () => {
  const [counter, setCount] = useState(0);
  const handleChange = (evt) => {
    setCount(evt.target.value);
 
  };
  return (
    <div>
      enter the first value of the count:
      <input type="number" onChange={handleChange} />
      <Counter count={counter} />
      <SetFullDay/>
    </div>
  );
};

export default App;
