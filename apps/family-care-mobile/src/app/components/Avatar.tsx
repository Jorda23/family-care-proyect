import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AvatarInterface } from '@familyCare/common';

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export const Avatar = (props: AvatarInterface) => {
  const { imageUrl, name } = props;
  return (
    <View style={{ paddingRight: 10 }}>
      <Image style={style.image} source={{ uri: imageUrl }} />
      <Text>{name}</Text>
    </View>
  );
};
