import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
      <Text style={styles.poppins}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  poppins: {
    fontFamily: 'Poppins_400Regular',
  },
});
