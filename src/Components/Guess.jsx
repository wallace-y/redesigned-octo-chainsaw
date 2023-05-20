import { useState } from "react";

function Guess(props) {
  const [newGuess, setNewGuess] = useState("");
  const guess = props.guess;
  const currentWord = props.currentWord;
  const setGuess = props.setGuess;

  function handleSubmit(event) {
    if (!currentWord) {
      alert("Please press start.");
    } else {
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
      {/* This is an alert which shows on game load as default */}
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>Welcome to a Wordle clone!</strong> Please click the start
        button to generate your word.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  );
}

export default Guess;
