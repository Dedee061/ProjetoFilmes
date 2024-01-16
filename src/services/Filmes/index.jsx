import {View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, { useState } from 'react';

import Detalhes from '../../Modal';

export default function Filmes({data}) {

  const [visiblemodal, SetVisibleModal] = useState(false)
  


  return (
    <View style={s.container}>
      <View style={s.card}>
        <Text style={s.titulo}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={s.capa} />
      </View>

      <View style={s.areabutton}>
        <TouchableOpacity style={s.button} onPress={() => SetVisibleModal(true)}>
          <Text style={s.botãoText}>Leio Mais</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType='slide' visible={visiblemodal}>
        <Detalhes  filme={data} voltar={( ) => SetVisibleModal(false)}/>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: '#303030',
    margin: 15,
    elevation: 2

  },
  container:{
    backgroundColor: "#1c1c1c"
  },  
  capa:{
    height: 250,
    zIndex: 2
  },
  titulo:{
    color: "#fff",
    padding: 15,
    fontSize: 18,

  },
  areabutton:{
    alignItems: 'flex-end',
    zIndex:9
  },
  button:{
    marginTop: -55,
    width: 100,
    backgroundColor: '#09A7ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botãoText:{
    color:"#fff",
    textAlign: 'center',
    fontWeight: 'bold'
  }
  
});
