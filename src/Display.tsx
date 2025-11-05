import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import PreviousInputDisplay from './PreviousInputDisplay';
import CurrentInputDisplay from './CurrentInputDisplay';
import { CalculatorDataContext, HeightDataContext } from './contexts';

const Display = () => {
  const { calculatorData } = useContext(CalculatorDataContext);
  const { heightData, setHeightData } = useContext(HeightDataContext);

  return (
    <View
      style={styles.container}
      onLayout={(e) =>
        setHeightData({ ...heightData, display: e.nativeEvent.layout.height })
      }
    >
      <PreviousInputDisplay data={calculatorData.previousInputDisplay} />
      <CurrentInputDisplay data={calculatorData.currentInputDisplay} />
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    paddingRight: 12,
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'space-around',
    height: '27%',
    borderBottomColor: 'grey',
  },
});
