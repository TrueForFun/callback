import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <div style={{ backgroundColor: state.color ? "yellowgreen" : "burlywood" }}>
      <input
        style={{ color: "blue" }}
        type="text"
        value={state.userInput}
        placeholder="Reduce Input"
        onChange={(e) =>
          dispatch({ type: "newUserInput", payload: e.target.value })
        }
      />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <br />
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <br />
        <button onClick={() => dispatch({ type: "tgColor" })}>
          Change Color
        </button>
        <br />
      </section>
    </div>
  );
};

export default Reduce;
