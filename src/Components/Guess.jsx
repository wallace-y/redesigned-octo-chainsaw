import { useState } from "react";
import Alert from "./Alert";

function Guess(props) {
  const [newGuess, setNewGuess] = useState("");
  const guess = props.guess;
  const currentWord = props.currentWord;
  const setGuess = props.setGuess;
  const [startAlert, setStartAlert] = useState(false);

  function handleSubmit(event) {
    if (!currentWord) {
      setStartAlert(true);
    } else {
      setStartAlert(false);
      setGuess((currentList) => {
        return [...currentList, newGuess];
      });
      setNewGuess("");
      if (currentWord === newGuess) {
        alert("You got it!");
      } else if (guess.length === 5) {
        alert(`Close. The answer was ${currentWord}`);
      }
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
    </form>
  );
}

export default Guess;
