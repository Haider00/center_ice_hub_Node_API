import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDrag } from "react-dnd";

const DraggableCard = ({ item, index }) => {
  const [, ref] = useDrag({
    type: "CARD",
    item: { index, type: "CARD", content: item },
  });

  return (
    <div
      ref={ref}
      style={{
        minWidth: 200,
        padding: "1rem",
        margin: "1rem",
        textAlign: "center",
        "@media (max-width: 600px)": {
          minWidth: "100px",
          // padding: '0.5rem',
        },
        border: "1px solid #152b55",
        cursor: "move",
      }}
    >
      <Typography sx={{ fontSize: 14 }}>{item}</Typography>
    </div>
  );
};
export default DraggableCard;
