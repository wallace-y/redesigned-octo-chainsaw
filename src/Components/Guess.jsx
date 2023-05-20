function Guess() {
  return (
    <div>
      <form className="container m-5">
        <div class="mb-3 row">
          <label for="guess" class="col col-form-label">
            Your guess
          </label>
          <div class="col">
            <input
              type="text"
              readonly
              class="form-control"
              id="guess"
              maxLength={5}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Guess;
