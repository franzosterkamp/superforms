import React from "react";

function CardForm() {
  return (
    <form>
      <label>
        <input type="text" required />
      </label>
      <label>
        <input type="date" required />
      </label>
      <textarea rows="10" required></textarea>
      <button>Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default CardForm;
