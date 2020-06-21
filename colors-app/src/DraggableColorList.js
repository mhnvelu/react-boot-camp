import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
const DraggableColorList = SortableContainer((props) => {
  const { colors, handleDelete } = props;
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          name={color.name}
          color={color.color}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
