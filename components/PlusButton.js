import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  customButton: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    marginBottom: 25,
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
      <FontAwesome5
        name="plus"
        size={size}
        color={focused ? COLORS.white : COLORS.oldWhite}
      />
    </View>
  );
}

export default PlusButton;
