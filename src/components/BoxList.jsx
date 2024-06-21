import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export default function BoxList() {
  const DEFAULT_BOXLIST = [
    {
      bg: "black",
      width: 100,
      height: 100,
    },
  ];
  const [boxlist, setBoxList] = useState(DEFAULT_BOXLIST);

  function addBox(newBox) {
    setBoxList((prevBoxList) => [...prevBoxList, newBox]);
  }
  function removeBox(index) {
    setBoxList((prevBoxList) =>
      prevBoxList.filter((prevBox, idx) => idx !== index)
    );
  }

  return (
    <>
      <div>
        {boxlist.map((currentBox, index) => (
          <Box
            key={index}
            index={index}
            bg={currentBox.bg}
            width={currentBox.width}
            height={currentBox.height}
            removeBox={removeBox}
          />
        ))}
      </div>
      <div>
        <NewBoxForm addBox={addBox} />
      </div>
    </>
  );
}
