import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");


  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_=+{}[]|:;<>,.?/~`";
    }

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password);
  })

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl font-bold underline text-white">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-6 py-9 text-orange-500 bg-gray-700">
        <div className="flex shadow-sm rounded-lg overflow-hidden mb-3">
          <input
            type="text"
            value={Password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-2 px-4"
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              ref={passwordRef}
            />
            <label>length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
