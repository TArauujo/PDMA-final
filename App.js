
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from "./src/pages/Task"
import NewTask from "./src/pages/NewTask"
import Details from "./src/pages/Details"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bandas Cadastradas'>
        <Stack.Screen 
          name="Bandas Cadastradas"//cabeçalho grande
          component={Task}
          options={{
            headerTintColor: 'black'
          }}
        />
        <Stack.Screen
          name="Nova Banda"//cabeçalho grande
          component={NewTask}
          options={{
            headerTintColor: 'black'
          }}
        />
        <Stack.Screen
          name="Detalhes Banda"//cabeçalho grande
          component={Details}
          options={{
            headerTintColor: 'black'
          }}
        />
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
