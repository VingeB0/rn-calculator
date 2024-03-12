import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface INumberComponent {
  value: number;
  onPress: (value: number) => void;
}

function NumberButton({value, onPress}: INumberComponent) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default NumberButton;
