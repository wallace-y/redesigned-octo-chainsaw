import { useState } from "react";
import Alert from "./Alert";
import WinAlert from "./WinAlert";
import LostAlert from "./LostAlert";

function Guess(props) {
  const [newGuess, setNewGuess] = useState("");
  const guess = props.guess;
  const currentWord = props.currentWord;
  const setGuess = props.setGuess;
  const [startAlert, setStartAlert] = useState(false);
  const winAlert = props.winAlert;
  const setWinAlert = props.setWinAlert;
  const lostAlert = props.lostAlert;
  const setLostAlert = props.setLostAlert;

  function handleSubmit(event) {
    if (!currentWord) {
      setStartAlert(true);
    } else if (currentWord) {
      setStartAlert(false);
      setGuess((currentList) => {
        return [...currentList, newGuess];
      });
      if (currentWord === newGuess) {
        setWinAlert(true);
      } else if (guess.length === 5) {
        setLostAlert(true);
      }
      setNewGuess("");
    }

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3 row">
        <label htmlFor="guess" className="col col-form-label">
          Your guess
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="guess"
            value={newGuess}
            onChange={(event) => setNewGuess(event.target.value)}
            minLength={5}
            maxLength={5}
          />
        </div>
      </div>

      {/* Alert when the start button has not been pressed */}
      {startAlert && <Alert />}
      {/* Alert when the game has been won */}
      {winAlert && <WinAlert />}
      {/* Alert when the game has been lost */}
      {lostAlert && <LostAlert currentWord={currentWord} />}
    </form>
  );
}

export default Guess;
