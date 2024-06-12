import React, { useLayoutEffect } from "react";
import { useState } from "react";

const LayOutEffect = () => {
  const [count, setCount] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({ paddingTop: `20px` });

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 10000000; i++) {
      if (i === 10000000)
        setSectionStyle({ ...sectionStyle, paddingLeft: `${random}px` });
    }
  }, [count]);
  return (
    <div>
      <section style={sectionStyle}>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <br />
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
        <br />

        <br />
      </section>
    </div>
  );
};

export default LayOutEffect;
