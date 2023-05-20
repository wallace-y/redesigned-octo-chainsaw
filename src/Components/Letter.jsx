import "../App.css";

function Letter(props) {
  const char = props.char;
  const status = props.status;

  if (status === "Green") {
    return (
      <div className="col border wordle-letter bg-success text-center d-flex justify-content-center align-items-center">
        {char}
      </div>
    );
  } else if (status === "Yellow") {
    return (
      <div className="col border wordle-letter bg-warning text-center d-flex justify-content-center align-items-center">
        {char}
      </div>
    );
  } else if (status === "Grey") {
    return (
      <div className="col border wordle-letter bg-secondary text-center d-flex justify-content-center align-items-center">
        {char}
      </div>
    );
  } else {
    return (
      <div className="col border wordle-letter bg-light text-center d-flex justify-content-center align-items-center">
        {char}
      </div>
    );
  }
}

export default Letter;
