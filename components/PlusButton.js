import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  customButton: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    marginBottom: 10,
    width: 60,
  },
});

function PlusButton({ focused, size }) {
  return (
    <View
      style={[
        styles.customButton,
        { backgroundColor: focused ? COLORS.primary : COLORS.danger },
      ]}
    >
      <Foundation
        name="plus"
        size={size}
        color={focused ? COLORS.white : COLORS.oldWhite}
      />
    </View>
  );
}

export default PlusButton;
