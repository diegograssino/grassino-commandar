import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  customButton: {
    borderColor: COLORS.secondary,
    borderRadius: 10,
    borderWidth: 3,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  customButtonText: {
    color: COLORS.secondary,
    fontFamily: 'FiraSans_500Medium',
  },
});
function ItemButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customButtonText}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

export default ItemButton;
