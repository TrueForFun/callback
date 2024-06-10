import React, { useState, useRef } from "react";

const Ref = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();
  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };
  const focusOnInput = () => {
    inputRef.current.focus();
  };
  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };
  return (
    <section>
      <input
        ref={inputRef}
        style={{ color: "rebeccapurple" }}
        type="text"
        value={randomInput}
        placeholder="Ref Input"
        onChange={handleChange}
      />
      <br />
      <p>Renders:{renders.current}</p>
      <br />
      <button onClick={focusOnInput}>Focus</button>
      <br />
      <section>
        <button onClick={startTimer}>Start</button>
        <br />
        <button onClick={stopTimer}>Stop</button>
        <br />
        <button onClick={resetTimer}>Reset</button>
        <br />
      </section>
      <p>Seconds: {seconds}</p>
      <p>{randomInput}</p>
    </section>
  );
};

export default Ref;
