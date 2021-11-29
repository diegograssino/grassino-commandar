import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const ScreenItemList = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ScreenItemList.js</Text>
      <CustomButton
        title="Siguiente pantalla"
        onPress={() => navigation.navigate('ScreenItemDetail')}
      />
    </View>
  );
};

export default ScreenItemList;
