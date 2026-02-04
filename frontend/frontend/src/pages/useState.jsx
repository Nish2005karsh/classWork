import React, { useState } from "react";

const ResizableGridCard = () => {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(250);

  const colIncrease = () => setWidth(width + 40);
  const colDecrease = () => {
    if (width > 150) setWidth(width - 40);
  };

  const rowIncrease = () => setHeight(height + 40);
  const rowDecrease = () => {
    if (height > 150) setHeight(height - 40);
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.card,
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="card"
          style={styles.image}
        />
      </div>

      <div style={styles.controls}>
        <button onClick={colIncrease}>Column +</button>
        <button onClick={colDecrease}>Column −</button>
        <button onClick={rowIncrease}>Row +</button>
        <button onClick={rowDecrease}>Row −</button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "40px"
  },
  card: {
    overflow: "hidden",
    borderRadius: "14px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
    transition: "all 0.3s ease"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  controls: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px"
  }
};

export default ResizableGridCard;
