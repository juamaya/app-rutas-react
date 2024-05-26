import React, { useEffect } from "react";
import Contador from '../Contador'

  const A = () => {

    useEffect(() => {
     
      document.title = 'JUAMAYA | Page A';
    });

  return (
    <div  >
      <h1>Pagina A</h1>
       <Contador/>
    </div>
  );
};

export default A;
