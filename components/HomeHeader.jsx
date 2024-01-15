import React from 'react';
import { Text, View } from 'react-native';

const HomeHeader = () => {
  return (
    <View style={{marginVertical: 20}}>
      <Text
        style={{
          fontSize: 16,
          color: '#fff',
        }}>
        Hello 👋
      </Text>
      <Text
        style={{
          fontSize: 24,
          color: '#fff',
          marginTop: 5,
        }}>
        Grab your NFTs
      </Text>
    </View>
  );
};

export default HomeHeader;
