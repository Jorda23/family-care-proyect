/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import Avatar from './components/Avatar';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={{ backgroundColor: 'gray', padding: 10 }}>
          <Text testID="heading" style={{ color: 'white' }}>
            App movile test
          </Text>
        </View>

        <Avatar
          imageUrl={
            'https://images.unsplash.com/photo-1682685796002-e05458d61f07?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          name={'Jordan'}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
