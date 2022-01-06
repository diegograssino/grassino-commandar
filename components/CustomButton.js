// eslint-disable-next-line no-unused-vars
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  customButton: {
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  customButtonText: {
    fontFamily: 'FiraSans_500Medium',
    fontSize: 15,
    textAlign: 'center',
  },
});

function CustomButton({ onPress, title, backgroundColor, color, width, icon }) {
  return (
    <TouchableOpacity
      style={[
        styles.customButton,
        {
          backgroundColor: backgroundColor ?? COLORS.secondary,
          width: width ?? null,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.customButtonText, { color: color ?? COLORS.white }]}>
        {icon || null}
        {icon ? ' ' : null}
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
