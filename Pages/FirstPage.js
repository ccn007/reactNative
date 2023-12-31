import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const FirstPage = ({navigation}) => {

    return(
        <View style = {styles.container} >
          <Text style = {styles.textStyle}>This is the First Page of the App</Text>
          <Button title='Go to SecondPage' onPress={()=>navigation.navigate('SecondDrawer')}/>
        </View>
      )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 16
    },
});
