import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Count from "./components/Count";
import Greeting from "./components/Greeting";
import Signup from "./components/Signup";
import Colors from "./components/Colors";
import Hover from "./components/Hover";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      {/* <Count /> */}
      {/* <Signup /> */}
      {/* <Colors /> */}
      {/* <Hover /> */}
      <header>
        <p>NAVBAR</p>
        <nav>
          {/* <a href='/colors'>go to colors</a> */}
          <Link to="/">Go Home</Link>
          <Link to="/colors">Go to colors</Link>
          <Link to="/count">Go to Count</Link>
          <Link to="/signup">Go to Signup</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Hover />} />
        <Route path="/greet/:name" element={<Greeting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/count" element={<Count />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
