import React from "react";
import TextInput from "./TextInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  //Username is at least 4 characters
  //Password is at least 6 characters
  //Password cant be 'password'

  const navigate = useNavigate();

  function checkFields(e) {
    e.preventDefault();
    navigate("/profile");
    // if (username.length < 4) {
    //   setErrorMessage("Username must be at least 4 characters");
    // } else if (password.length < 6) {
    //   setErrorMessage("Password must be at least 6 characters");
    // } else if (password === "password") {
    //   setErrorMessage("You cant call the password password");
    // } else {
    //   //success
    //   setErrorMessage(`Welcome ${username}!`);
    // }
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <form onSubmit={checkFields} style={{ textAlign: "center" }}>
        <TextInput
          action={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
        />
        <TextInput
          action={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <TextInput
          action={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          name="confirmPassword"
        />
        <button>Create</button>
        <p>{errorMessage}</p>
      </form>
    </>
  );
};

export default Signup;
