import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import api from './src/services/api'
import Filmes from './src/services/Filmes'

export default function App() {

  const [filmes, setFilmes] = useState([])
  const [load, setload] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      setload(false)
    }
    loadFilmes()
  }, [])

if(load) {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <ActivityIndicator color="#121212" size={45}/>
    </View>
  )
} else {
  return (

    <View style={s.container}>
      <FlatList 
      data={filmes}
      keyExtractor={ item => String(item.id)}
      renderItem={ ({item}) => <Filmes data={item} /> }
      />
    </View>
  )
}
  
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    
  },
})