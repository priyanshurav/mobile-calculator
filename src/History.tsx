import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useEffect, useRef } from 'react';
import { HistoryContext } from './contexts';
import HistoryItem from './HistoryItem';
import { FADE_DURATION } from './constants';

const History = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { historyData, setHistoryData } = useContext(HistoryContext);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: FADE_DURATION,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const closeHistory = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: FADE_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setHistoryData({ ...historyData, showHistory: false });
    });
  };

  const clearHistory = () => {
    setHistoryData({ ...historyData, history: [] });
  };

  return (
    <Animated.View
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        opacity: fadeAnim,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.historyText}>History</Text>
        <Pressable
          style={styles.closeButton}
          onPress={closeHistory}
          android_ripple={{ color: 'lightgrey' }}
        >
          <Text style={{ fontSize: 20 }}>x</Text>
        </Pressable>
      </View>
      <ScrollView>
        {historyData.history.map((item, index) => {
          return (
            <HistoryItem item={item} closeHistory={closeHistory} key={index} />
          );
        })}
      </ScrollView>
      <View style={styles.clearHistoryButtonContainer}>
        <Pressable
          android_ripple={{ color: 'lightgrey' }}
          style={styles.clearHistoryButton}
          onPress={clearHistory}
        >
          <Text style={styles.clearHistoryButtonText}>Clear history</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingBottom: 10,
  },
  historyText: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 5,
    width: '90%',
  },
  clearHistoryButton: {
    paddingVertical: 5,
    fontSize: 15,
    width: 150,
    borderWidth: 1,
    borderColor: 'grey',
  },
  clearHistoryButtonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  clearHistoryButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 10,
  },
  closeButton: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
