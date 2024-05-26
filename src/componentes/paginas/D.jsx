import React, { useEffect } from "react";
import Menu from "../navegacion/Menu";

const D = () => {

  useEffect(() => {
     
    document.title = 'JUAMAYA | Page D';
  });
  return (
    <div>
      <h1>Pagina D</h1>
      <Menu />
    </div>
  );
};

export default D;
