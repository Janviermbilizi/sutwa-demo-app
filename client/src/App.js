import "./App.css";
import { useState, useEffect } from "react";
import together from "./together.jpg";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [appName, setAppName] = useState("Winner App");
  const [winner, setwinner] = useState(null);
  const [participants, setParticipants] = useState([]);

  const [count, setCount] = useState(0);

  const add1 = () => setCount(count + 1);
  const minus1 = () => setCount(count - 1);

  const generateWinner = async () => {
    let thewinner = await fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((x) => x.Winner);

    let data = { winner: thewinner };
    setwinner(data.winner);
  };

  const getParticipants = async () => {
    let allparticipants = await fetch("http://localhost:5000/participants")
      .then((response) => response.json())
      .then((res) => res);

    setParticipants(allparticipants);
  };

  //Added this part for the notes
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(getParticipants);

  return (
    <div className="App">
      <h1>{appName}</h1>

      <button classname="b1" onClick={generateWinner}>
        Generate a winner
      </button>

      <h2>{winner}</h2>
      <h4>Participants</h4>
      <ol>
        {/* add and input and button that receive participant name sent it to the backend */}

        {participants.map((item, i) => (
          <li style={{ textDecoration: "none" }} key={i}>
            {item}
          </li>
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
      <div>Counter App</div>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={add1}>
        +
      </button>
      <button className="btn btn-primary" onClick={minus1}>
        -
      </button>
    </div>
  );
}

export default App;
