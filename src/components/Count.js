import React from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

const Count = () => {
  //hook
  //two values
  //1. The variable that we will call/change  e.g.: something
  //2. a function which changes the first variable e.g.: setSomething
  //React.useState() will declare the default value for the hook
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <CountDisplay count={count} />
      {/* <button onClick={subtract}>Subtract</button>
      <button onClick={add}>Add</button> */}
      <CountButton action={subtract}>Subtract</CountButton>
      <CountButton action={add}>Add</CountButton>
      {/* <CountButton action={() => setCount(count + 7)}>
        Add Inline with State Lift
      </CountButton>
      <button onClick={() => setCount(count + 7)}>Add Inline</button> */}
    </div>
  );
};

export default Count;
