import "./App.css";
import { useState, useEffect } from "react";
import together from "./together.jpg";

function App() {
  const [appName, setAppName] = useState("Winner App");

  const fetchData = () => {
    fetch("http://localhost:8080/")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  fetchData();

  //useEffect();

  return (
    <div className="App">
      <h1>{appName}</h1>
      {/* <button onClick={changeTheAppName}>Change the name of the App</button>
      <button onClick={resetTheAppName}>Reset the name of the App</button> */}
      <img src={together} />
    </div>
  );
}

export default App;
