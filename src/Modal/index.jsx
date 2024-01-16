import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Detalhes(props) {
  return (
    <View style={s.container}>
      <View style={s.modalcontainer}>


            <TouchableOpacity style={s.btnVoltar} onPress={props.voltar}>
              <Text style={{color: '#fff', fontSize: 16}}>
                Voltar
              </Text>
            </TouchableOpacity>

            <Text style={s.titulo}>{props.filme.nome}</Text>
            <Text style={s.sinopse}>Sinopse:</Text>
            <Text style={s.descricao}>{props.filme.sinopse}</Text>
      </View>
    </View>
  )
}


const s = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-end'
  },
  modalcontainer: {
    height: '70%' ,
    width: '95%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnVoltar:{
    backgroundColor: '#09A7ff',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  titulo:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  sinopse:{
    color:'#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao:{
    color: '#fff',
    marginLeft: 10,
    marginRight: 10
  }
})