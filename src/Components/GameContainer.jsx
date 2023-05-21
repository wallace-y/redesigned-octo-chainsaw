import Word from "./Word";
import Guess from "./Guess";
import { useState } from "react";
import Disclaimer from "./Disclaimer";
import WordContainer from "./WordContainer";

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
  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    let ranNum = Math.floor(Math.random() * wordList.length);
    setCurrentWord(wordList[ranNum]);
    setGameStarted(true);
  }

  function resetGame() {
    setGuess([]);
    let ranNum = Math.floor(Math.random() * wordList.length);
    setCurrentWord(wordList[ranNum]);
  }

  return (
    <div className="container text-center">
      {/* This is an alert which shows on game load as default */}
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>Welcome to a Wordle clone!</strong> <br />
        Please click the start button below to generate your word.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <WordContainer guess={guess} currentWord={currentWord} />
      <Guess guess={guess} currentWord={currentWord} setGuess={setGuess} />

      <div className="container text-center mb-1">
        <div className="row">
          {!gameStarted && (
            <div className="col">
              <button className="btn btn-dark" onClick={startGame}>
                Start
              </button>
            </div>
          )}
          {gameStarted && (
            <div className="col">
              <button className="btn btn-dark" onClick={resetGame}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>

      <Disclaimer />
    </div>
  );
}

export default GameContainer;
