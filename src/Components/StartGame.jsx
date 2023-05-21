function StartGame(props) {
  const wordList = props.wordList;
  const setCurrentWord = props.setCurrentWord;
  const setGameStarted = props.setGameStarted;
  const setGuess = props.setGuess;
  const gameStarted = props.gameStarted;
  const winAlert = props.winAlert;
  const setWinAlert = props.setWinAlert;
  const lostAlert = props.lostAlert;
  const setLostAlert = props.setLostAlert;

  function startGame() {
    let ranNum = Math.floor(Math.random() * wordList.length);
    setCurrentWord(wordList[ranNum]);
    setGameStarted(true);
  }

  function resetGame() {
    setGuess([]);
    let ranNum = Math.floor(Math.random() * wordList.length);
    setCurrentWord(wordList[ranNum]);
    setWinAlert(false);
    setLostAlert(false);
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
