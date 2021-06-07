import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/main'
import 'react-native-gesture-handler' 
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown : false
}}>
     <Stack.Screen name = "Home" component = {Home} />
     <Stack.Screen name = "Main" component = {Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

