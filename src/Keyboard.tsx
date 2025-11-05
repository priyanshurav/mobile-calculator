import { FlatList, View, StyleSheet } from 'react-native';
import React from 'react';
import { flatten } from 'lodash';
import KeyboardButton from './KeyboardButton';
import { keyboardLayout } from './keyboardLayout';

const Keyboard = () => {
  return (
    <View style={styles.keyboardContainer}>
      {keyboardLayout.map((row, i) => (
        <View key={i} style={styles.buttonRow}>
          {row.map((buttonData, j) => (
            <KeyboardButton key={`${i}${j}`} buttonData={buttonData} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default Keyboard;
