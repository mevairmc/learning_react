import React from "react";

export default function Instructions({ title, steps }) { //I sent props and bny default is an object, we use destructuring
  return (
    <section className="instructions">
      <h2>{title}</h2>
      <ol>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </section>
  );
}