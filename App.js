import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import FlatListAPI from './components/FlatListAPI'
import New from './components/New'
import ProductScreen from './components/ProductScreen'

const App = () => {
  return (
    <View style={styles.container}>
        <FlatList_HeaderFooter/>
        <New/>
    <View>
      <New/>
      <ProductScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,   
    justifyContent:'left',    
    alignItems:'left'   
 }
})
}