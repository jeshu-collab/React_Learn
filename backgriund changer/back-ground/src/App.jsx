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
          test
        </div>
      </div>
    </>
  );
}

export default App;