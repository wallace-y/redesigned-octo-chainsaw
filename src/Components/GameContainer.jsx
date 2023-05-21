import Word from "./Word";
import Guess from "./Guess";
import { useState } from "react";
import Disclaimer from "./Disclaimer";
import WordContainer from "./WordContainer";
import Banner from "./Banner";
import StartGame from "./StartGame";

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
  const [winAlert, setWinAlert] = useState(false);
  const [lostAlert, setLostAlert] = useState(false);

  return (
    <div className="container text-center">
      <Banner />
      <WordContainer guess={guess} currentWord={currentWord} />
      <Guess
        winAlert={winAlert}
        setWinAlert={setWinAlert}
        lostAlert={lostAlert}
        setLostAlert={setLostAlert}
        guess={guess}
        currentWord={currentWord}
        setGuess={setGuess}
      />
      <StartGame
        winAlert={winAlert}
        setWinAlert={setWinAlert}
        lostAlert={lostAlert}
        setLostAlert={setLostAlert}
        wordList={wordList}
        setCurrentWord={setCurrentWord}
        setGameStarted={setGameStarted}
        setGuess={setGuess}
        guess={guess}
        gameStarted={gameStarted}
      />
      <Disclaimer />
    </div>
  );
}

export default GameContainer;
