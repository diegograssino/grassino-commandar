import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const ScreenOrderDetail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ScreenOrderDetail.js</Text>
      <CustomButton
        title="Volver al principio"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default ScreenOrderDetail;
