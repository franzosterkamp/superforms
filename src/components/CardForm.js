import React from "react";

function CardForm() {
  return (
    <form>
      <label>
        <input type="text" />
      </label>
      <label>
        <input type="date" />
      </label>
      <textarea rows="10"></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CardForm;
