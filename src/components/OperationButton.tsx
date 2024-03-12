import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Operations} from '../interfaces';

interface IOperationComponent {
  value: Operations;
  onPress: (value: Operations) => void;
}

function OperationButton({value, onPress}: IOperationComponent) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
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

export default OperationButton;
