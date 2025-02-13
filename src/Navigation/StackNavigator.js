import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import Signup from '../Screens/Signup';
import Login from '../Screens/Auth/Login';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>   
    <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/> 
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>   
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}}/>
   
  </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
