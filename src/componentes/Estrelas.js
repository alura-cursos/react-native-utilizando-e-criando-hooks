import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

function Estrelas({quantidade, editavel = false, grande = false}) {
  const getImagem = index => (index < quantidade ? estrela : estrelaCinza);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Image key={i} source={getImagem(i)} style={estilos.estrela} />,
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
  estrela: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
});

export default Estrelas;
