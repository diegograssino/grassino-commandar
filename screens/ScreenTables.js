import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const ScreenTables = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ScreenTables.js</Text>
      <CustomButton
        title="Siguiente pantalla"
        onPress={() => navigation.navigate('ScreenItemList')}
      />
    </View>
  );
};

export default ScreenTables;
