import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PreviousInputDisplayData} from './types';
import {format} from './format';

interface Props {
  data: PreviousInputDisplayData;
}

const PreviousInputDisplay = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${format(data.value?.toString?.() || null)} ${
        data.operation ?? ''
      }`}</Text>
    </View>
  );
};

export default PreviousInputDisplay;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 27,
    textAlign: 'right',
  },
});
