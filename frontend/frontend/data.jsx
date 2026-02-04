import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((res) => res.json())
      .then((students) => setData(students))
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div 
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {data.map((product) => (
        <div
          key={product.id}
          style={{
            width: "250px",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(208, 80, 80, 0.1)",
            backgroundColor: "white",
          }}
        >
          <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }} />
          <h3 style={{ marginBottom: "8px" }}>{product.name}</h3>
          <p style={{ color: "#555" }}>{product.class}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
