import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <h1 className="">React Bg_Changer</h1>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-xl">
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yallow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-l"
              style={{ backgroundColor: "cyan" }}
              onClick={() => setColor("cyan")}
            >
              Cyan
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
