import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { KeyboardButtonType, Operations, TKeyboardButton } from './types';
import { CalculatorDataContext, HeightDataContext } from './contexts';
import { keyboardLayout } from './keyboardLayout';
import { calculateAnswer } from './calculateAnswer';
import { MAX_DIGITS } from './constants';

interface Props {
  buttonData: TKeyboardButton;
}

const KeyboardButton = ({ buttonData }: Props) => {
  const { calculatorData, setCalculatorData } = useContext(
    CalculatorDataContext
  );

  const handlePress = () => {
    if (buttonData.type === KeyboardButtonType.Number) {
      const inp = `${calculatorData.currentInputDisplay.value ?? ''}${
        buttonData.textToShow
      }`;
      if (inp.length > MAX_DIGITS) {
        return;
      }
      setCalculatorData({
        ...calculatorData,
        currentInputDisplay: { value: inp },
      });
    } else if (
      buttonData.type === KeyboardButtonType.Operation &&
      calculatorData.currentInputDisplay.value !== null &&
      !calculatorData.currentInputDisplay.value.endsWith('.')
    ) {
      const isPreviousInputDisplayEmpty =
        calculatorData.previousInputDisplay.value !== null &&
        calculatorData.previousInputDisplay.operation !== null;

      if (isPreviousInputDisplayEmpty) {
        setCalculatorData({
          previousInputDisplay: {
            value: calculateAnswer(
              calculatorData.previousInputDisplay.value as number,
              calculatorData.previousInputDisplay.operation as Operations,
              parseFloat(calculatorData.currentInputDisplay.value)
            ),
            operation: buttonData.textToShow as Operations,
          },
          currentInputDisplay: { value: null },
        });
      } else {
        setCalculatorData({
          previousInputDisplay: {
            value: parseFloat(calculatorData.currentInputDisplay.value),
            operation: buttonData.textToShow as Operations,
          },
          currentInputDisplay: { value: null },
        });
      }
    } else if (
      buttonData.type === KeyboardButtonType.Operation &&
      calculatorData.currentInputDisplay.value === null &&
      calculatorData.previousInputDisplay.operation !== null &&
      calculatorData.previousInputDisplay.value !== null
    ) {
      setCalculatorData({
        ...calculatorData,
        previousInputDisplay: {
          ...calculatorData.previousInputDisplay,
          operation: buttonData.textToShow as Operations,
        },
      });
    } else if (buttonData.type === KeyboardButtonType.Special) {
      buttonData?.onClick?.();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        ...styles.keyboardButton,
        ...buttonData.styles?.pressable,
      }}
    >
      <Text
        style={{
          ...styles.keyboardButtonText,
          ...buttonData.styles?.text,
        }}
      >
        {buttonData.textToShow}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  keyboardButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  keyboardButtonText: {
    fontSize: 30,
  },
});

export default KeyboardButton;
