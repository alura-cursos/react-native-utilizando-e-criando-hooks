import React, { useState } from "react";
import { View, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const [ quantidade, setQuantidade ] = useState(quantidadeAntiga);
    const estilos = estilosFuncao(grande);

    const getImage = (index) => {
        if (index < quantidade) {
            return estrela;
        }
        return estrelaCinza;
    }

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    disabled={!editavel}
                    >
                    <Image source={getImage(i)} style={estilos.estrela} />
                </TouchableOpacity>
            );
        }

        return listaEstrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
});
