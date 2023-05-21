function Banner() {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Welcome to a Wordle clone!</strong> <br />
      Please click the start button below to generate your word.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Banner;
