/* eslint-disable func-names */
import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

function ScreenItemDetail({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ScreenItemDetail.js</Text>
      <CustomButton
        title="Volver al principio"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default ScreenItemDetail;
