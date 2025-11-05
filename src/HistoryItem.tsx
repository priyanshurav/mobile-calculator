import { Pressable, StyleSheet, Text } from 'react-native';
import React, { useContext } from 'react';
import { THistoryItem } from './types';
import { CalculatorDataContext } from './contexts';

interface Props {
  item: THistoryItem;
  closeHistory: () => void;
}

const HistoryItem = ({ item, closeHistory }: Props) => {
  const { calculatorData, setCalculatorData } = useContext(
    CalculatorDataContext
  );

  const handleHistoryItemPress = () => {
    setCalculatorData({
      ...calculatorData,
      currentInputDisplay: { value: item.ans.toString() },
    });
    closeHistory();
  };

  return (
    <Pressable
      style={styles.historyItem}
      android_ripple={{ color: 'lightgrey' }}
      onPress={handleHistoryItemPress}
    >
      <Text
        style={styles.historyItemText}
      >{`${item.val1} ${item.operation} ${item.val2} = ${item.ans}`}</Text>
    </Pressable>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  historyItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  historyItemText: {
    fontSize: 20,
  },
});
