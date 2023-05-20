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

  function resetGame() {
    setGuess([]);
    let ranNum = Math.floor(Math.random() * wordList.length);
    setCurrentWord(wordList[ranNum]);
  }

  return (
    <div className="container text-center">
      <div className="container mb-3 text-center">
        <Word guess={guess[0]} currentWord={currentWord} />
        <Word guess={guess[1]} currentWord={currentWord} />
        <Word guess={guess[2]} currentWord={currentWord} />
        <Word guess={guess[3]} currentWord={currentWord} />
        <Word guess={guess[4]} currentWord={currentWord} />
        <Word guess={guess[5]} currentWord={currentWord} />
      </div>
        <Guess guess={guess} currentWord={currentWord} setGuess={setGuess} />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button className="btn btn-dark" onClick={startGame}>
              Start
            </button>
          </div>
          <div className="col">
            <button className="btn btn-dark" onClick={resetGame}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameContainer;
