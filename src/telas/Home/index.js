import React from 'react';
import Topo from './componentes/Topo';
import Produtores from './componentes/Produtores';

function App() {
  return (
    <>
      <Produtores topo={Topo} />
    </>
  );
}

export default App;
