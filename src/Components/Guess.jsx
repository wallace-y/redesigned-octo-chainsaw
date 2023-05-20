import { useState } from "react";

function Guess(props) {
  const [newGuess, setNewGuess] = useState("");
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
      console.log(currentWord);
    }
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container m-5">
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
      </form>
    </div>
  );
}

export default Guess;
