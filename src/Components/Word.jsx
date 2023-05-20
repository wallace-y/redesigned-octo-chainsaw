import Letter from "./Letter";

function Word(props) {
  const guess = props.guess;

  {
    if (guess) {
      return (
        <div className="container text-center">
          <div className="row">
            {guess.split("").map((char, index) => {
              return <Letter key={index} char={char} />;
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
