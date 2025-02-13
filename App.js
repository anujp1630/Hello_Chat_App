import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './src/Navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-get-random-values';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})