import Word from "./Word";
import Guess from "./Guess";
import { useState } from "react";

function GameContainer() {
  const wordList = [
    "Angel",
    "Apple",
    "Alive",
    "Amber",
    "Among",
    "Arrow",
    "Awake",
    "Azure",
    "Bacon",
    "Badge",
    "Balmy",
    "Basil",
    "Beach",
    "Bingo",
    "Bliss",
    "Bloom",
    "Braid",
    "Brisk",
    "Brush",
    "Buddy",
    "Candy",
    "Charm",
    "Chase",
    "Cheer",
    "Chime",
    "Cliff",
    "Cloud",
    "Coast",
    "Coral",
    "Craft",
    "Dance",
    "Dream",
    "Drift",
    "Eager",
    "Eagle",
    "Elbow",
    "Ember",
    "Fable",
    "Fancy",
    "Fever",
    "Flick",
    "Fluff",
    "Frost",
    "Giddy",
    "Glaze",
    "Gleam",
    "Globe",
    "Grace",
    "Gusto",
    "Hatch",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [guess, setGuess] = useState([]);

  function startGame() {
    let ranNum = Math.floor(Math.random() * wordList.length);
    setCurrentWord(wordList[ranNum]);
  }

  return (
    <>
      <Word guess={guess[0]} />
      <Word guess={guess[1]} />
      <Word guess={guess[2]} />
      <Word guess={guess[3]} />
      <Word guess={guess[4]} />
      <Word guess={guess[5]} />
      <Guess setGuess={setGuess} />
      <div className="container-fluid">
        <button className="btn btn-dark" onClick={startGame}>
          Start
        </button>
      </div>
    </>
  );
}

export default GameContainer;
