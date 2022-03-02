import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export function ToDoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a To Do"
        autoComplete="off"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add new ToDo</button>
    </form>
  );
}
