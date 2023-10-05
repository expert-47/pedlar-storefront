import React from "react";

const SliderDots = ({ activeIndex, slideCount, onDotClick }) => {
  const dots = [];
  for (let i = 0; i < slideCount; i++) {
    let dotColor = "";
    dotColor = i === activeIndex ? "#000000" : "#ccc";
    dots.push(
      <div
        key={i}
        style={{ backgroundColor: dotColor, width: 8, height: 8, borderRadius: 4, margin: 5 }}
        onClick={() => onDotClick(i)} // Pass the index to onDotClick
      />,
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {dots}
    </div>
  );
};

export default SliderDots;
