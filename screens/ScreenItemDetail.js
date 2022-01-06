/* eslint-disable func-names */
import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import GreenBar from '../components/GreenBar';

function ScreenItemDetail({ route, navigation }) {
  return (
    <>
      <GreenBar table={route.params.tableId} />
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
    </>
  );
}

export default ScreenItemDetail;
