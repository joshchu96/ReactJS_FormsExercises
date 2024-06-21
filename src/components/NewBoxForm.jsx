import { useState } from "react";

export default function NewBoxForm({ addBox }) {
  const DEFAULT_BOX = {
    bg: "",
    width: "",
    height: "",
  };

  const [box, setBox] = useState(DEFAULT_BOX);

  function handleChange(e) {
    const { name, value } = e.target;
    setBox((prevBox) => ({ ...prevBox, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBox = {
      bg: box.bg,
      width: box.width,
      height: box.height,
    };
    addBox(newBox);
    setBox(DEFAULT_BOX);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bg">Background Color:</label>
        <input id="bg" name="bg" value={box.bg} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="width">Box Width:</label>
        <input
          id="width"
          name="width"
          value={box.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Box Height:</label>
        <input
          id="height"
          name="height"
          value={box.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Add New Box</button>
      </div>
    </form>
  );
}
