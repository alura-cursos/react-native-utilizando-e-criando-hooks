import React from 'react';
import { SafeAreaView } from 'react-native';

import Topo from './componentes/Topo';
import Produtores from './componentes/Produtores';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Produtores topo={Topo} />
    </SafeAreaView>
  );
}

export default App;
