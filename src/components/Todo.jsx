export default function Todo({ idx, desc, removeTodo }) {
  function handleRemove(e) {
    e.preventDefault();
    removeTodo(idx);
  }
  return (
    <>
      <li>{desc}</li>
      <button onClick={handleRemove}>X</button>
    </>
  );
}
