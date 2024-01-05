/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text testID="heading">App movile</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
