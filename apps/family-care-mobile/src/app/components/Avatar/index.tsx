/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AvatarInterface } from '@familyCare/common'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


const Avatar = (props: AvatarInterface) => {
  const { imageUrl, name } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Avatar;
