import { DeviceEventEmitter, Dimensions, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import HistoryButtonContainer from './HistoryButtonContainer';
import Display from './Display';
import Keyboard from './Keyboard';
import { CalculatorDataContext, HistoryContext } from './contexts';
import { handlers } from './listeners';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calculator = () => {
  const { calculatorData, setCalculatorData } = useContext(
    CalculatorDataContext
  );
  const { historyData, setHistoryData } = useContext(HistoryContext);

  useEffect(() => {
    const {
      allClearHandler,
      clearHandler,
      equalHandler,
      negativeHandler,
      dotHandler,
      squareRootHandler,
    } = handlers(
      calculatorData,
      setCalculatorData,
      historyData,
      setHistoryData
    );

    const equalListener = DeviceEventEmitter.addListener('equal', equalHandler);

    const allClearListener = DeviceEventEmitter.addListener(
      'all_clear',
      allClearHandler
    );

    const squareListener = DeviceEventEmitter.addListener('dot', dotHandler);

    const squareRootListener = DeviceEventEmitter.addListener(
      'square_root',
      squareRootHandler
    );

    const negativeListener = DeviceEventEmitter.addListener(
      'negative',
      negativeHandler
    );

    const clearListener = DeviceEventEmitter.addListener('clear', clearHandler);

    return () => {
      equalListener.remove();
      allClearListener.remove();
      clearListener.remove();
      squareListener.remove();
      squareRootListener.remove();
      negativeListener.remove();
    };
  }, [calculatorData, historyData, setCalculatorData, setHistoryData]);

  return (
    <View style={{ height: Dimensions.get('window').height - 20 }}>
      <HistoryButtonContainer />
      <Display />
      <Keyboard />
    </View>
  );
};

export default Calculator;
