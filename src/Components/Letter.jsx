function Letter(props) {
  const char = props.char;

  return <div className="col border wordle-letter">{char}</div>;
}

export default Letter;
