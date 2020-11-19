import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import FilePickerManager from 'react-native-file-picker';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/pages/Main';
import Selector_midia from './src/pages/Selector_midia';
import Screen_license from './src/pages/Screen_license';
import Teste from './src/pages/Teste';
import Config from './src/pages/Config';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Tela Inicial" component={Main} />
        <Stack.Screen name="Selector_midia" component={Selector_midia} 
        options={{title: "Seletor de  Mídias"}}/>
        <Stack.Screen name="Licença" component={Screen_license} />
        <Stack.Screen name="Teste" component={Teste} 
        options={{title: "Licença"}} />
        <Stack.Screen name="Config" component={Config}  
        options={{title: "Configurações"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}