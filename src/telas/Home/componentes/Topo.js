import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import {carregaTopo} from '../../../services/fakeApi';

import logo from '../../../assets/logo.png';

// function Topo() {
//   const [topo, setTopo] = useState({boasVindas: '', legenda: ''});

//   useEffect(() => {
//     const resultado = carregaTopo();
//     setTopo(resultado);
//   }, []);

//   return (
//     <View style={estilos.topo}>
//       <Image source={logo} style={estilos.imagem} />
//       <Text style={estilos.boasVindas}>{topo.boasVindas}</Text>
//       <Text style={estilos.legenda}>{topo.legenda}</Text>
//     </View>
//   );
// }

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const topo = carregaTopo();
    this.setState({topo});
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    const {boasVindas, legenda} = this.state.topo;
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{boasVindas}</Text>
        <Text style={estilos.legenda}>{legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
