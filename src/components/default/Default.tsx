import React, { useState } from "react";

export const Default = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        height: "100vh",
        width: "15%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{count}</h1>
        <button
          style={{
            padding: "1em 3em",
            borderRadius: "5px",
            border: "1px solid grey",
            color: "white",
            backgroundColor: "#171717",
          }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
