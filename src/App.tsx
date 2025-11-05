/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { useState } from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Calculator from './Calculator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalculatorData, HeightData, HistoryData } from './types';
import { Provider as PaperProvider } from 'react-native-paper';
import History from './History';
import {
  HeightDataContext,
  CalculatorDataContext,
  HistoryContext,
} from './contexts';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    previousInputDisplay: { value: null, operation: null },
    currentInputDisplay: { value: null },
  });

  const [heightData, setHeightData] = useState<HeightData>({
    buttonContainer: 0,
    display: 0,
  });

  const [historyData, setHistoryData] = useState<HistoryData>({
    history: [],
    showHistory: false,
  });

  return (
    <HeightDataContext.Provider value={{ heightData, setHeightData }}>
      <CalculatorDataContext.Provider
        value={{ calculatorData, setCalculatorData }}
      >
        <HistoryContext.Provider value={{ historyData, setHistoryData }}>
          <PaperProvider>
            <SafeAreaView style={styles.container}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              />
              {historyData.showHistory && <History />}
              <Calculator />
            </SafeAreaView>
          </PaperProvider>
        </HistoryContext.Provider>
      </CalculatorDataContext.Provider>
    </HeightDataContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default App;
