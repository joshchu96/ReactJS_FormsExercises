export default function Box({ index, bg, width, height, removeBox }) {
  const style = {
    backgroundColor: bg,
    width: `${width}px`,
    height: `${height}px`,
    margin: "10px",
    display: "inline-block",
  };

  const btn = {
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    marginLeft: "5px",
  };

  function handleRemove() {
    removeBox(index);
  }

  return (
    <>
      <div style={style}></div>

      <button style={btn} onClick={handleRemove}>
        X
      </button>
    </>
  );
}
