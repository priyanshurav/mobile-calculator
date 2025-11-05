import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CurrentInputDisplayData} from './types';
import {format} from './format';

interface Props {
  data: CurrentInputDisplayData;
}

const CurrentInputDisplay = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.text}>
        {format(data.value)}
      </Text>
    </View>
  );
};

export default CurrentInputDisplay;

const styles = StyleSheet.create({
  container: {
    paddingTop: 7,
    paddingRight: 5,
  },
  text: {
    fontSize: 75,
    textAlign: 'right',
    color: 'black',
  },
});
