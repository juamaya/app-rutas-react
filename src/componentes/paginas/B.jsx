import React, { useEffect } from "react";
import   CharacterList from "./rick-and morty/CharacterList";

const B = () => {

  useEffect(() => {
     
    document.title = 'JUAMAYA | Page B';
  });
  return (
    <div>
      <h1>Pagina B</h1>

      <CharacterList />

    </div>
  );
};

export default B;
