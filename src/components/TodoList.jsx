import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  }
  function removeTodo(indexToRemove) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((prevTodo, idx) => idx !== indexToRemove)
    );
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todoList.map((todo, idx) => (
          <Todo key={idx} idx={idx} desc={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
}
