import { useState, useEffect, useCallback } from "react";
import Memo from "./Memo";
import Ref from "./Ref";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);
  const sum = useCallback(() => num1 + num2, [num1, num2]);
  // here we use callback function to prevent the endless loop. we alse put num1 and num2 as dependieses

  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
    // setResult(sum());
  }, [sum]);

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <br />
      <br />
      <Memo />
      <Ref />
    </div>
  );
}

export default App;
