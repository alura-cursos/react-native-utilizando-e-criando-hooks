import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

function Estrelas({
  quantidade: quantidadeInicial,
  editavel = false,
  grande = false,
}) {
  const [quantidadeAtual, setQuantidadeAtual] = useState(quantidadeInicial);

  const getImagem = (index) => {
    if (index < quantidadeAtual) {
      return estrela;
    } else {
      return estrelaCinza;
    }
  }
  const estilos = funcaoEstilos(grande);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidadeAtual(i + 1)}
          disabled={!editavel}>
          <Image source={getImagem(i)} style={estilos.estrela} />
        </TouchableOpacity>,
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

const funcaoEstilos = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export default Estrelas;
