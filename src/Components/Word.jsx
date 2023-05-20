import Letter from "./Letter";

function Word(props) {
  const guess = props.guess;
  const currentWord = props.currentWord;

  {
    if (guess) {
      return (
        <div className="container text-center">
          <div className="row">
            {guess.split("").map((char, index) => {
              let status;
              if (char.toUpperCase() === currentWord[index].toUpperCase()) {
                // if exactly equal
                status = "Green";
              } else if (currentWord.includes(char)) {
                // if in the word but not at the right index
                status = "Yellow";
              } else {
                // if completely wrong

                status = "Grey";
              }
              return <Letter key={index} char={char} status={status} />;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container text-center">
          <div className="row">
            <Letter />
            <Letter />
            <Letter />
            <Letter />
            <Letter />
          </div>
        </div>
      );
    }
  }
}

export default Word;
