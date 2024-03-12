import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// @ts-ignore
function HistoryScreen({route}) {
  const {history} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {history.map((item: string, index: number) => (
        <Text style={styles.text} key={item}>
          {index + 1}. {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default HistoryScreen;
