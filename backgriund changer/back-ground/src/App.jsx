
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 gap-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white p-3 rounded-xl">
          <button className="outline-none px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => setColor("red")}>
            Red
          </button>
          <button className="outline-none px-4 py-2 bg-green-500 text-white rounded-lg" onClick={() => setColor("green")}>
            Green
          </button>
          <button className="outline-none px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className="outline-none px-4 py-2 bg-yellow-500 text-white rounded-lg" onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className="outline-none px-4 py-2 bg-purple-500 text-white rounded-lg" onClick={() => setColor("purple")}>
            Purple
          </button>
        </div>
      </div>
        
      
    </>
  );
}

export default App;