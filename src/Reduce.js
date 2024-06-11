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

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor",
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
        // onChange={(e) =>
        //   dispatch({ type: "newUserInput", payload: e.target.value })
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <p>{state.count}</p>
      <section>
        {/* <button onClick={() => dispatch({ type: "increment" })}>+</button> */}
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <br />
        {/* <button onClick={() => dispatch({ type: "decrement" })}>-</button> */}
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <br />
        {/* <button onClick={() => dispatch({ type: "tgColor" })}>
          Change Color
        </button> */}
        <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          Change Color
        </button>
        <br />
      </section>
      <p>{state.userInput}</p>
    </div>
  );
};

export default Reduce;
