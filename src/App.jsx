//import Joke from "./Joke";
import { useState } from "react";
export default function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    console.log("add value", count);
    setCount(count + 1);
  }
  
  return (
   <>
    <h1>Jokes</h1>
    <h2>count: {count}</h2>

    <button onClick={addValue}>Add value </button>
    <br />
    <button>remove value</button>
   </>
  )
}
