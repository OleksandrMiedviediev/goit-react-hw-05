
import { useState } from "react";
import css from "./Search.module.css"

export default function Search({ onFilter }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(inputValue);
    setInputValue("")
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={css.input}
      />
      <button type="submit" className={css.btn} >Search</button>
    </form>
  );
}