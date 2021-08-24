import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import Estrelas from '../../../componentes/Estrelas';

function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={() => setSelecionado(!selecionado)}>
      <Image source={imagem} style={estilos.logo} accessibilityLabel={nome} />

      <View style={estilos.informacao}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>

        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    shadowColor: '#000',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    // Android
    elevation: 4,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default Produtor;
