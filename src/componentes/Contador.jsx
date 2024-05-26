import React, { useEffect, useState } from "react";

const Contador= () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`La cuenta es: ${count}`);
    document.title = `REACT,  La cuenta es: ${count}`;
  });

  return (
    <>
      <div className="container bg-warning p-3 text-center">
        <h1>Contador</h1>
        <h3>La cuenta es: {count}</h3>

        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Aumentar
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => setCount(count - count)}
        >
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          Disminuir
        </button>
      </div>
    </>
  );
}

export default Contador;
