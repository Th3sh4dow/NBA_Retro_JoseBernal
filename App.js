import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import VsScreen from './VSscreen';
import WinnerScreen from './WinnerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Selecciona equipos' }}
        />

        <Stack.Screen 
          name="VS" 
          component={VsScreen}
          options={{ title: 'Partido' }}
        />
        <Stack.Screen name="Winner" component={WinnerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
