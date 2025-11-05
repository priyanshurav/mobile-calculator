export enum Operations {
  Add = '+',
  Subtract = '-',
  Divide = '/',
  Multiply = '*',
}

export type PreviousInputDisplayData = {
  operation: Operations | null;
  value: number | null;
};
export type CurrentInputDisplayData = {value: string | null};

export enum KeyboardButtonType {
  Number,
  Operation,
  Special,
}

export type TKeyboardButton = {
  type: KeyboardButtonType;
  name: string;
  textToShow: string;
  onClick?: () => void;
  styles?: {
    text?: Record<string, unknown>;
    pressable?: Record<string, unknown>;
    container?: Record<string, unknown>;
  };
};

export type THistoryItem = {
  val1: number;
  operation: Operations;
  val2: number;
  ans: number;
};

export type CalculatorData = {
  previousInputDisplay: PreviousInputDisplayData;
  currentInputDisplay: {value: string | null};
};

export type HeightData = {
  buttonContainer: number;
  display: number;
};

export type HistoryData = {showHistory: boolean; history: THistoryItem[]};
