import React from "react";
import "./App.css";
import CountdownTimer from "./component/CountdownTimer";
import UserList from "./component/UserList";
import WindowSize from "./component/WindowSize";
function App() {
  return (
    <div className="App">
      <CountdownTimer />
      <UserList />
      <WindowSize />
    </div>
  );
}

export default App;
