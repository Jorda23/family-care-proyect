/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Navigation from './pages/Navigation';

export const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </PaperProvider>
  );
};

export default App;
 