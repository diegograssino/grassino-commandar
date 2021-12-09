import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
      <Text style={styles.customButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
  },
  customButtonText: {
    fontFamily: 'Poppins_500Medium',
    color: COLORS.white,
  },
});
