import { TKeyboardButton, KeyboardButtonType, Operations } from './types';
import { DeviceEventEmitter } from 'react-native';

export const keyboardLayout: TKeyboardButton[][] = [
  [
    {
      type: KeyboardButtonType.Special,
      name: 'All Clear',
      textToShow: 'AC',
      onClick: () => {
        DeviceEventEmitter.emit('all_clear');
      },
      styles: {
        text: {
          color: 'red',
        },
      },
    },
    {
      type: KeyboardButtonType.Special,
      name: 'Clear',
      textToShow: 'C',
      onClick: () => {
        DeviceEventEmitter.emit('clear');
      },
    },
    {
      type: KeyboardButtonType.Special,
      name: 'Square root',
      textToShow: '√',
      onClick: () => {
        DeviceEventEmitter.emit('square_root');
      },
    },
    {
      type: KeyboardButtonType.Operation,
      name: 'Divide',
      textToShow: Operations.Divide,
    },
  ],
  [
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_7',
      textToShow: '7',
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_8',
      textToShow: '8',
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_9',
      textToShow: '9',
    },
    {
      type: KeyboardButtonType.Operation,
      name: 'Multiply',
      textToShow: Operations.Multiply,
    },
  ],
  [
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_4',
      textToShow: '4',
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_5',
      textToShow: '5',
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_6',
      textToShow: '6',
    },
    {
      type: KeyboardButtonType.Operation,
      name: 'Subtract',
      textToShow: Operations.Subtract,
    },
  ],
  [
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_1',
      textToShow: '1',
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_2',
      textToShow: '2',
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_3',
      textToShow: '3',
    },
    {
      type: KeyboardButtonType.Operation,
      name: 'Add',
      textToShow: Operations.Add,
    },
  ],
  [
    {
      type: KeyboardButtonType.Special,
      name: 'Negative',
      textToShow: '±',
      onClick: () => {
        DeviceEventEmitter.emit('negative');
      },
    },
    {
      type: KeyboardButtonType.Number,
      name: 'NUMBER_0',
      textToShow: '0',
    },
    {
      type: KeyboardButtonType.Special,
      name: 'Dot',
      textToShow: '.',
      onClick: () => {
        DeviceEventEmitter.emit('dot');
      },
    },
    {
      type: KeyboardButtonType.Special,
      name: 'Equal',
      textToShow: '=',
      onClick: () => {
        DeviceEventEmitter.emit('equal');
      },
      styles: {
        pressable: {
          backgroundColor: 'dodgerblue',
        },
        text: {
          color: 'white',
          fontSize: 50,
        },
      },
    },
  ],
];
