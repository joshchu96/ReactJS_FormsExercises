import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");
  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo: </label>
      <input id="desc" name="desc" value={todo} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
