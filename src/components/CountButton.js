import React from "react";

const CountButton = (props) => {
  return (
    <button
      onClick={props.action}
      style={{ color: "blue", backgroundColor: "magenta" }}
    >
      {props.children}
    </button>
  );
};

export default CountButton;
