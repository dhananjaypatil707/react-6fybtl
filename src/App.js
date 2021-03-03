import React from "react";
import "./style.css";

function App(props) {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{props.date.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
