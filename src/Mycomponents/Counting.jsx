import React, { useState } from 'react';

const Counting = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  function changeColor() {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>

      {/* Changing button color and text */}
      <div>
        <button style={{ backgroundColor: color }} onClick={changeColor}>
          Change Color
        </button>
      </div>
    </>
  );
};

export default Counting;
