function Alert() {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      Please click the start button to generate your word.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
