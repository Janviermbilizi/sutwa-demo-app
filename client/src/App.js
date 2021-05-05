import "./App.css";
import { useState } from "react";

function App() {
  const [appName, setAppName] = useState("Winner App");

  const changeTheAppName = () => {
    setAppName("Loser App");
  };

  const resetTheAppName = () => {
    setAppName("Winner App");
  };

  return (
    <div className="App">
      <h1>{appName}</h1>
      <button onClick={changeTheAppName}>Change the name of the App</button>
      <button onClick={resetTheAppName}>Reset the name of the App</button>
    </div>
  );
}

export default App;
