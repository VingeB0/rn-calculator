import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ICleanComponent {
  value: string;
  onPress: () => void;
}

function CleanButton({value, onPress}: ICleanComponent) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
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

export default CleanButton;
