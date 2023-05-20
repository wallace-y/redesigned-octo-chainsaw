function Letter(props) {
  const char = props.char;
  const status = props.status;

  if (status === "Green") {
    return <div className="col border wordle-letter bg-success">{char}</div>;
  } else if (status === "Yellow") {
    return <div className="col border wordle-letter bg-warning">{char}</div>;
  } else if (status === "Grey") {
    return <div className="col border wordle-letter bg-secondary">{char}</div>;
  } else {
    return <div className="col border wordle-letter bg-light">{char}</div>;
  }
}

export default Letter;
