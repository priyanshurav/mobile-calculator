import {addHistoryItem} from './addHistoryItem';
import {calculateAnswer} from './calculateAnswer';
import {CalculatorData, HistoryData, THistoryItem} from './types';

export const handlers = (
  calculatorData: CalculatorData,
  setCalculatorData: React.Dispatch<React.SetStateAction<CalculatorData>>,
  historyData: HistoryData,
  setHistoryData: React.Dispatch<React.SetStateAction<HistoryData>>,
) => {
  const currentInputDisplayValueNum = parseFloat(
    calculatorData.currentInputDisplay.value as string,
  );

  return {
    equalHandler: () => {
      if (
        calculatorData.currentInputDisplay.value !== null &&
        calculatorData.previousInputDisplay.value === null &&
        calculatorData.previousInputDisplay.operation === null &&
        historyData.history.length !== 0
      ) {
        const lastHistoryItem =
          historyData.history[historyData.history.length - 1];

        const ans = calculateAnswer(
          currentInputDisplayValueNum,
          lastHistoryItem.operation,
          lastHistoryItem.val2,
        );

        setCalculatorData({
          ...calculatorData,
          currentInputDisplay: {value: ans.toString()},
        });

        const historyItem: THistoryItem = {
          val1: currentInputDisplayValueNum,
          operation: lastHistoryItem.operation,
          val2: lastHistoryItem.val2,
          ans,
        };

        addHistoryItem({history: historyItem, historyData, setHistoryData});

        return;
      }

      if (
        calculatorData.currentInputDisplay.value === null ||
        calculatorData.previousInputDisplay.operation === null ||
        calculatorData.previousInputDisplay.value === null
      ) {
        return;
      }

      const ans = calculateAnswer(
        calculatorData.previousInputDisplay.value,
        calculatorData.previousInputDisplay.operation,
        currentInputDisplayValueNum,
      );

      setCalculatorData({
        currentInputDisplay: {
          value: ans.toString(),
        },
        previousInputDisplay: {operation: null, value: null},
      });

      const historyItem: THistoryItem = {
        val1: calculatorData.previousInputDisplay.value,
        operation: calculatorData.previousInputDisplay.operation,
        val2: currentInputDisplayValueNum,
        ans,
      };

      const lastHistoryItem =
        historyData.history[historyData.history.length - 1];

      const isLastAndCurrentHistoryItemSame =
        lastHistoryItem &&
        historyItem.val1 === lastHistoryItem.val1 &&
        historyItem.operation === lastHistoryItem.operation &&
        historyItem.val2 === lastHistoryItem.val2 &&
        historyItem.ans === lastHistoryItem.ans;

      if (isLastAndCurrentHistoryItemSame) {
        return;
      }

      addHistoryItem({history: historyItem, historyData, setHistoryData});
    },

    allClearHandler: () => {
      setCalculatorData({
        currentInputDisplay: {value: null},
        previousInputDisplay: {operation: null, value: null},
      });
    },

    dotHandler: () => {
      let val = '';

      if (calculatorData.currentInputDisplay.value === null) {
        val = '0.';
      }

      val = [...(calculatorData.currentInputDisplay.value ?? ''), '.'].join('');

      setCalculatorData({
        ...calculatorData,
        currentInputDisplay: {
          value: val,
        },
      });
    },

    squareRootHandler: () => {
      if (calculatorData.currentInputDisplay.value === null) {
        return;
      }

      setCalculatorData({
        currentInputDisplay: {
          value: Math.sqrt(currentInputDisplayValueNum).toString(),
        },
        previousInputDisplay: {operation: null, value: null},
      });
    },

    negativeHandler: () => {
      if (calculatorData.currentInputDisplay.value === null) {
        return;
      }

      setCalculatorData({
        currentInputDisplay: {
          value: (currentInputDisplayValueNum * -1).toString(),
        },
        previousInputDisplay: {operation: null, value: null},
      });
    },

    clearHandler: () => {
      if (calculatorData.currentInputDisplay.value === null) {
        return;
      }

      const inpStr = calculatorData.currentInputDisplay.value
        ?.toString()
        .split('')
        .slice(
          0,
          calculatorData.currentInputDisplay.value.toString().length - 1,
        )
        .join('');

      setCalculatorData({
        ...calculatorData,
        currentInputDisplay: {
          value: inpStr === '' ? null : (inpStr as string),
        },
      });
    },
  };
};
