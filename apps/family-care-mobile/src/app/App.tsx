/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Text } from 'react-native'

export const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <Text>Hola Mundo</Text>
    </PaperProvider>
  );
};

export default App;
 