import React, {useState} from "react";
import "./App.css";

function App(){
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      setJoke(data.setup + "..." + data.punchline);
    });
  };
  
  return (
  <div>
    <button onClick={getJoke}>
      get joke
    </button>{joke}
  </div>
  );
}

export default App;
