import React, { useState, useEffect, useMemo, useCallback } from "react";

const getArray = () => {
  for (let i = 0; i < 100000; i++) {
    // do something
  }
  return ["True", "Fun"];
};

const Memo = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");
  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);
  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  const myArray = useMemo(() => getArray(), []);

  useEffect(() => {
    console.log("new array");
  }, [myArray]);
  return (
    <div>
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
      <br></br>
      <br></br>
      <label>Input from Memo:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      ></input>
      <p>{randomInput}</p>
    </div>
  );
};

export default Memo;
