import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import {carregaProdutores} from '../../../services/carregaDados';
import Produtor from './Produtor';

function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('Carregando...');
  const [produtores, setProdutores] = useState([]);

  useEffect(() => {
    const {titulo: tituloLista, lista} = carregaProdutores();
    setTitulo(tituloLista);
    setProdutores(lista);
  }, []);

  const ListHeaderComponent = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={produtores}
      renderItem={({item: produtor}) => <Produtor {...produtor} />}
      keyExtractor={({nome}) => nome}
      style={estilos.lista}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default Produtores;
