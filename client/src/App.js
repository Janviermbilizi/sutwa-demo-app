import "./App.css";
import { useState, useEffect } from "react";
import together from "./together.jpg";

function App() {
  const [appName, setAppName] = useState("Winner App");
  const [winner, setwinner] = useState(null);

  const generateWinner = async () => {
    const thewinner = await fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((x) => x.Winner);

    const data = { winner: thewinner };
    setwinner(data.winner);
  };

  useEffect(generateWinner);

  return (
    <div className="App">
      <h1>{appName}</h1>

      <button onClick={generateWinner}>Generate a winner</button>

      <p>The winner of today</p>

      <h2>{winner}</h2>
      {/* <button onClick={changeTheAppName}>Change the name of the App</button>
      <button onClick={resetTheAppName}>Reset the name of the App</button> */}
      <img src={together} />
    </div>
  );
}

export default App;
