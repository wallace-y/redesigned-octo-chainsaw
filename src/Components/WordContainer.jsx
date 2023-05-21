import Word from "./Word";

function WordContainer(props) {
  const guess = props.guess;
  const currentWord = props.currentWord;
  return (
    <div className="container mb-3 text-center">
      <Word guess={guess[0]} currentWord={currentWord} />
      <Word guess={guess[1]} currentWord={currentWord} />
      <Word guess={guess[2]} currentWord={currentWord} />
      <Word guess={guess[3]} currentWord={currentWord} />
      <Word guess={guess[4]} currentWord={currentWord} />
      <Word guess={guess[5]} currentWord={currentWord} />
    </div>
  );
}

export default WordContainer;
