import React from "react";

const Hover = () => {
  const [textColor, setTextColor] = React.useState("#000000");
  const [int, setInt] = React.useState(null);

  //   let textColor = "#000000";
  //   let int;

  function setRave() {
    let x = setInterval(() => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      //   textColor = "#" + randomColor;
      setTextColor("#" + randomColor);
    }, 100);
    setInt(x);
  }

  function end() {
    clearInterval(int);
  }

  return (
    <h2
      style={{ textAlign: "center", color: textColor }}
      onMouseOver={setRave}
      onMouseLeave={() => {
        end();
      }}
    >
      WHEEEEEEEEe
    </h2>
  );
};

export default Hover;
