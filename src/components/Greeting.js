import React from "react";

const Greeting = (props) => {
  console.log(React.useState);
  // let greet;
  // if (props.lang === "en") {
  //   greet = "Hello";
  // } else if (props.lang === "es") {
  //   greet = "Hola";
  // } else if (props.lang === "de") {
  //   greet = "Hallo";
  // } else {
  //   greet = "Bonjour";
  // }

  // let greet;
  // switch (props.lang) {
  //   case "en":
  //     greet = "hello";
  //     break;
  //   case "es":
  //     greet = "Hola";
  //     break;
  //   case "de":
  //     greet = "Hallo";
  //     break;
  //   default:
  //     greet = "Bonjour";
  //     break;
  // }

  //object literals
  const languages = {
    en: "Hello",
    es: "Hola",
    de: "Hallo",
    fr: "Bonjour",
  };

  //dot notation
  // console.log(languages.de);

  // bracket notation
  console.log(languages[props.lang]);

  return (
    <p style={{ textAlign: "center" }}>
      {languages[props.lang]} {props.children}
    </p>
  );
};

export default Greeting;
