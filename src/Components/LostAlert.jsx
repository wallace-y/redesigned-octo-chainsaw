function LostAlert(props) {
  const currentWord = props.currentWord;

  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      Ooh close. The answer was {currentWord}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default LostAlert;
