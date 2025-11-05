import { Pressable, StyleSheet, View, Text } from 'react-native';
import React, { useContext } from 'react';
import { HeightDataContext, HistoryContext } from './contexts';

const HistoryButtonContainer = () => {
  const { heightData, setHeightData } = useContext(HeightDataContext);
  const { historyData, setHistoryData } = useContext(HistoryContext);

  return (
    <View
      style={styles.historyButtonContainer}
      onLayout={(e) =>
        setHeightData({
          ...heightData,
          buttonContainer: e.nativeEvent.layout.height,
        })
      }
    >
      <Pressable
        android_ripple={{ color: 'lightgrey' }}
        style={styles.historyButton}
        onPress={() => setHistoryData({ ...historyData, showHistory: true })}
      >
        <Text style={{ position: 'absolute', paddingBottom: 10 }}>☰</Text>
      </Pressable>
    </View>
  );
};

export default HistoryButtonContainer;

const styles = StyleSheet.create({
  historyButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  historyButton: {
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
});
