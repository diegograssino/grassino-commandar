import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  customButtonText: {
    color: COLORS.white,
    fontFamily: 'Poppins_500Medium',
  },
});
function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
