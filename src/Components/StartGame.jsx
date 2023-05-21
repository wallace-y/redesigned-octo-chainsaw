function StartGame(props) {
  const wordList = props.wordList;
  const setCurrentWord = props.setCurrentWord;
  const setGameStarted = props.setGameStarted;
  const setGuess = props.setGuess;
  const gameStarted = props.gameStarted;

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
  );
}

export default StartGame;
