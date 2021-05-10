import "./App.css";
import { useState } from "react";
import together from './together.jpg';

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
      <img src={together} />
    </div>
  );
}

export default App;
