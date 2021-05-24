import "./App.css";
import { useState, useEffect } from "react";
import together from "./together.jpg";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [appName, setAppName] = useState("Winner App");
  const [winner, setwinner] = useState(null);
  const [participants, setParticipants] = useState([]);

  const generateWinner = async () => {
    const thewinner = await fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((x) => x.Winner);

    const data = { winner: thewinner };
    setwinner(data.winner);
  };

  //Added this part for the notes
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //useEffect(generateWinner);

  return (
    <div className="App">
      <h1>{appName}</h1>

      <button classname="b1" onClick={generateWinner}>Generate a winner</button>

      <h2>{winner}</h2>
      {/* <button onClick={changeTheAppName}>Change the name of the App</button>
      <button onClick={resetTheAppName}>Reset the name of the App</button> */}
      {/* <img src={together} /> */}
      <h4>Participants</h4>
      <ol>
        {participants.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
