import { Box } from "@mui/material";
import React from "react";

const SliderDots = ({ activeIndex, items, onDotClick }) => {
  return (
    <Box sx={styles.container}>
      {items?.map((_, index) => (
        <Box
          key={index}
          style={{ ...styles.dot, backgroundColor: index === activeIndex ? "#000000" : "#ccc" }}
          onClick={() => onDotClick(index)} // Pass the index to onDotClick
        />
      ))}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
};
export default SliderDots;
