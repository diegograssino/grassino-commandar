import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const ScreenOrdersList = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ScreenOrdersList.js</Text>
      <CustomButton
        title="Siguiente pantalla"
        onPress={() => navigation.navigate('ScreenOrderDetail')}
      />
    </View>
  );
};

export default ScreenOrdersList;
