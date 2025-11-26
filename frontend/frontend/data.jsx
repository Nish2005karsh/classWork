import React, { useEffect, useState } from 'react';

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
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.class}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;