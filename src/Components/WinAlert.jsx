function WinAlert() {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      Well done! You got it!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default WinAlert;
