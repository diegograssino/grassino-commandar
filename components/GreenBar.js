import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants/colors';

function GreenBar({ table }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.success,
        paddingTop: 10,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: 'FiraSans_700Bold',
          fontSize: 17,
          paddingBottom: 5,
        }}
      >
        {table ? `Mesa ${table}` : 'Orden vacía'}
      </Text>
    </View>
  );
}

export default GreenBar;
